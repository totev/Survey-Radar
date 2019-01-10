import * as XLSX from '../../node_modules/xlsx/dist/xlsx.core.min.js';
class ExcelService {
    constructor($q) {
        this.$q = $q;
    }

    handleFile(e) {
        let deferred = this.$q.defer();

        try {
            const files = e.target.files;

            let f = files[0];
            let reader = new FileReader();

            reader.onload = (e) => {
                try {
                    let data = e.target.result;
                    let workbook = XLSX.read(data, {type: 'binary'});
                    deferred.resolve(workbook);
                } catch (exception) {
                    deferred.reject(exception);
                }
            };
            reader.readAsBinaryString(f);
        } catch (exception) {
            deferred.reject(exception);
        }

        return deferred.promise;
    }

    getMaxDimensionsWorksheet(worksheet) {
        let refs = worksheet["!ref"].split(":");

        return {
            min: this.translateCellName(refs[0]),
            max: this.translateCellName(refs[1])
        };
    }


    detailParsing(data, mainCatColNr = -1, subCatColNr = -1, questionColNr = -1, detailColNr = -1, valueColNrs = []) {
        let {maxRowNr, cols} = data;
        let mainCatCol = cols[mainCatColNr],
            subCatCol = cols[subCatColNr],
            questionCol = cols[questionColNr],
            detailCol = cols[detailColNr],
            valueCols = valueColNrs.map((nr) => cols[nr]).filter((col) => col !== undefined);

        let mainCats = [],
            mainCat,
            subCat,
            question,
            detail;

        for(let i = 0; i <= maxRowNr; i++) {
            const mainCatCell = mainCatCol === undefined ? undefined : mainCatCol.cells[i],
                subCatCell = subCatCol === undefined ? undefined : subCatCol.cells[i],
                questionCell = questionCol === undefined ? undefined : questionCol.cells[i],
                detailCell = detailCol === undefined ? undefined : detailCol.cells[i],
                valueCells = valueCols.map((col) => col.cells[i]);

            if ((mainCatCell || subCatCell || questionCell || detailCell) === undefined) {
                console.warn('Faulty or non existant cell found');
                continue;
            }

            if (this.isValidCell(mainCatCell)) {
                mainCat = {mainCat: this.parseTitle(mainCatCell), values: [], subCats: []};
                mainCats.push(mainCat);

                subCat = undefined;
                question = undefined;
                detail = undefined;
            }
            if (this.isValidCell(subCatCell)) {
                subCat = {title: this.parseTitle(subCatCell), values: [], questions: []};

                if (mainCat === undefined) {
                    mainCat = {mainCat: "", values: [], subCats: []};
                    mainCats.push(mainCat);
                }

                mainCat.subCats.push(subCat);

                question = undefined;
                detail = undefined;
            }
            if (this.isValidCell(questionCell)) {
                question = {title: this.parseTitle(questionCell), values: [], details: []};
                if (subCat === undefined) {
                    subCat = {title: "", questions: []};
                    mainCat.subCats.push(subCat);
                }
                subCat.questions.push(question);

                detail = undefined;
            }
            if (this.isValidCell(detailCell)) {
                detail = {title: this.parseTitle(detailCell), values: []};

                if (subCat === undefined) {
                    subCat = {title: "", values: [], questions: []};
                    mainCat.subCats.push(subCat);
                }
                if (question === undefined) {
                    question = {title: "", values: [], details: []};
                    subCat.questions.push(question);
                }
                question.details.push(detail);
            }

            const element = detail !== undefined ? detail : question !== undefined ? question : subCat !== undefined ? subCat : undefined;
            if (element !== undefined) {
                element.values = valueCells.map((cell) => this.parseValue(cell));
            }
        }
        return mainCats;
    }

    isValidCell(cell) {
        return (cell !== undefined && cell.v !== undefined && isNaN(cell.v) && cell.v !== '?');
    }

    isValueCell(cell) {
        return (cell !== undefined && !isNaN(cell.v));
    }

    parseValue(cell) {
        return cell !== undefined && !isNaN(cell.v) ? parseFloat(cell.v) : undefined;
    }

    parseTitle(cell) {
        return cell !== undefined && cell.v !== undefined ? cell.v : "";
    }

    restructureWorksheet(worksheet, colOffset = 0, rowOffset = 0) {
        if(worksheet === undefined) throw new Error('')
        let {max: maxCell} = this.getMaxDimensionsWorksheet(worksheet);
        let cols = {};
        Object.keys(worksheet).forEach((key) => {
            let {colNr, rowNr, colName} = this.translateCellName(key);
            if(colNr >= colOffset && rowNr >= rowOffset) {
                if(cols[colNr] === undefined) cols[colNr] = {colName, cells:{}};
                cols[colNr].cells[rowNr] = worksheet[key];
            }
        });
        return {maxRowNr: maxCell.rowNr, cols};
    }

    translateCellName(cellName) {
        let columnNrs = [];
        let colNr, rowNr;
        let colName = "";
        for(let i = 0; i < cellName.length; i++) {
            let charCode = cellName.charCodeAt(i);
            if(charCode > 64 && charCode < 91) {
                columnNrs.push(charCode - 65);
                colName += cellName[i];
            } else if(charCode > 48 && charCode < 58) {
                rowNr = parseInt(cellName.substr(i)) - 1;
                break;
            }
        }
        if(columnNrs.length > 0) {
            colNr = columnNrs.reduce((colNr, next, idx) => {
                if (next === undefined) {
                    return colNr;
                } else {
                    return (colNr + 1) * 24 + next;
                }
            });
        }
        return {colNr, rowNr, colName};
    }
}


export default angular.module('services.excel-service', [])
                      .service('excelService', ExcelService)
                      .name;