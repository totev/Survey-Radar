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

    parseWorkbook(workbook, sheetName) {
        let cellStructure = this.restructureWorksheet(workbook.Sheets[sheetName], 1, 3);
        let mainCats = this.detailParsing(cellStructure, 1, 2, 5, -1, [6, 8]);
        return mainCats;
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
            let mainCatCell = mainCatCol === undefined ? undefined : mainCatCol[i],
                subCatCell = subCatCol === undefined ? undefined : subCatCol[i],
                questionCell = questionCol === undefined ? undefined : questionCol[i],
                detailCell = detailCol === undefined ? undefined : detailCol[i],
                valueCells = valueCols.map((col) => col[i]);

            if (this.isValidCell(mainCatCell)) {
                mainCat = {mainCat: this.parseTitle(mainCatCell), subCats: []};
                mainCats.push(mainCat);

                subCat = undefined;
                question = undefined;
                detail = undefined;
            }
            if (this.isValidCell(subCatCell)) {
                subCat = {title: this.parseTitle(subCatCell), questions: []};

                if (mainCat === undefined) {
                    mainCat = {mainCat: "", subCats: []};
                    mainCats.push(mainCat);
                }

                mainCat.subCats.push(subCat);

                question = undefined;
                detail = undefined;
            }
            if (this.isValidCell(questionCell)) {
                question = {title: this.parseTitle(questionCell), details: []};
                if (subCat === undefined) {
                    subCat = {title: "", questions: []};
                    mainCat.subCats.push(subCat);
                }
                subCat.questions.push(question);

                detail = undefined;
            }
            if (this.isValidCell(detailCell)) {
                detail = {title: this.parseTitle(detailCell), questions: []};

                if (subCat === undefined) {
                    subCat = {title: "", questions: []};
                    mainCat.subCats.push(subCat);
                }
                if (question === undefined) {
                    question = {title: "", details: []};
                    subCat.questions.push(question);
                }
                question.details.push(detail);
            }

            let element = detail !== undefined ? detail : question !== undefined ? question : subCat !== undefined ? subCat : undefined;
            if (element !== undefined) {
                element.value = valueCells.map((cell) => this.parseValue(cell));
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
        let maxRowNr = 0;
        let cols = {};
        Object.keys(worksheet).forEach((key) => {
            let columnNrs = [];
            let rowNr;
            for(let i = 0; i < key.length; i++) {
                let charCode = key.charCodeAt(i);
                if(charCode > 64 + colOffset && charCode < 91) {
                    columnNrs.push(charCode - 65);
                } else if(charCode > 48 && charCode < 58) {
                    rowNr = parseInt(key.substr(i)) - 1;
                    if(rowNr > maxRowNr) maxRowNr = rowNr;
                    break;
                }
            }
            if(columnNrs.length > 0 && rowNr >= rowOffset) {
                let colNr = columnNrs.reduce((colNr, next, idx) => {
                    if (next === undefined) {
                        return colNr;
                    } else {
                        return (colNr + 1) * 24 + next;
                    }
                });
                if(cols[colNr] === undefined) {
                    cols[colNr] = {}
                }
                cols[colNr][rowNr] = worksheet[key];
            }
        });
        return {maxRowNr, cols};
    }
}


export default angular.module('services.excel-service', [])
                      .service('excelService', ExcelService)
                      .name;