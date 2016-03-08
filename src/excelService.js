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
        let cellStructure = this.restructureWorksheet(workbook.Sheets[sheetName], 0, 1);
        let mainCats = this.detailParsing(cellStructure, 1, 2, 3, 4);
        return mainCats;
    }

    detailParsing(data, mainCatColNr, subCatColNr, questionColNr, detailColNr) {
        let {maxRowNr, cols} = data;
        let mainCatCol = cols[mainCatColNr],
            mainCatValueCol = cols[mainCatColNr - 1],
            subCatCol = cols[subCatColNr],
            subCatValueCol = cols[subCatColNr - 1],
            questionCol = cols[questionColNr],
            questionValueCol = cols[questionColNr - 1],
            detailCol = cols[detailColNr],
            detailValueCol = cols[detailColNr - 1];

        let mainCats = [],
            mainCat,
            subCat,
            question;

        for(let i = 0; i <= maxRowNr; i++) {
            let mainCatCell = mainCatCol[i],
                mainCatValueCell = mainCatValueCol[i],
                subCatCell = subCatCol[i],
                subCatValueCell = subCatValueCol[i],
                questionCell = questionCol[i],
                questionValueCell = questionValueCol[i],
                detailCell = detailCol[i],
                detailValueCell = detailValueCol[i];

            if(this.isValidCell(mainCatCell) || this.isValueCell(mainCatValueCell)) {
                mainCat = {mainCat: this.parseTitle(mainCatCell), value: this.parseValue(mainCatValueCell), subCats: []};
                mainCats.push(mainCat);

                subCat = undefined;
                question = undefined;
            }
            if(this.isValidCell(subCatCell) || this.isValueCell(subCatValueCell)) {
                subCat = {title: this.parseTitle(subCatCell), value: this.parseValue(subCatValueCell), questions: []};

                if(mainCat === undefined) {
                    mainCat = {mainCat: "", subCats: []};
                    mainCats.push(mainCat);
                }

                mainCat.subCats.push(subCat);

                question = undefined;
            }
            if(this.isValidCell(questionCell) || this.isValueCell(questionValueCell)) {
                question = {title: this.parseTitle(questionCell), value: this.parseValue(questionValueCell), details: []};
                if(subCat === undefined) {
                    subCat = {title: "", questions: []};
                    mainCat.subCats.push(subCat);
                }
                subCat.questions.push(question);
            }
            if(this.isValidCell(detailCell) || this.isValueCell(detailValueCell)) {
                let detail = {title: this.parseTitle(detailCell), value: this.parseValue(detailValueCell), questions: []};

                if(subCat === undefined) {
                    subCat = {title: "", questions: []};
                    mainCat.subCats.push(subCat);
                }
                if(question === undefined) {
                    question = {title: "", details: []};
                    subCat.questions.push(question);
                }
                question.details.push(detail);
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
                    if (next === 'undefined') {
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