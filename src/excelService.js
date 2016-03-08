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
        let cellStructure = this.restructureWorksheet(workbook.Sheets[sheetName]);
        let mainCats = this.detailParsing(cellStructure, 1, 2, 3, 4);
        return mainCats;
    }

    detailParsing(cellStructure, mainCatColNr, subCatColNr, questionColNr, detailColNr) {
        let mainCatCol = cellStructure[mainCatColNr],
            mainCatValueCol = cellStructure[mainCatCol - 1],
            subCatCol = cellStructure[subCatColNr],
            subCatValueCol = cellStructure[subCatColNr - 1],
            questionCol = cellStructure[questionColNr],
            questionValueCol = cellStructure[questionColNr - 1],
            detailCol = cellStructure[detailColNr],
            detailValueCol = cellStructure[detailColNr - 1];

        let mainCats = [];

        let filteredMainCatColKeys = Object.keys(mainCatCol).filter((key) => isNaN(mainCatCol[key].v)),
            filteredSubCatColKeys = Object.keys(subCatCol).filter((key) => isNaN(subCatCol[key].v)),
            filteredQuestionColKeys = Object.keys(questionCol).filter((key) => isNaN(questionCol[key].v) && questionCol[key].v !== '?'),
            detailColKeys = Object.keys(detailCol);

        for(let i = 0; i < filteredMainCatColKeys.length; i++) {
            let mainCatRowNr = parseInt(filteredMainCatColKeys[i]);

            let nextMainCatRowNr = i === filteredMainCatColKeys.length - 1 ? Infinity : parseInt(filteredMainCatColKeys[i+1]);
            let mainCat = {
                mainCat: mainCatCol[mainCatRowNr].v,
                value: mainCatValueCol && mainCatValueCol[mainCatRowNr] ? parseFloat(mainCatValueCol[mainCatRowNr].v) : undefined,
                subCats: []
            };
            mainCats.push(mainCat);

            for (let j = 0; j < filteredSubCatColKeys.length; j++) {
                let subCatRowNr = parseInt(filteredSubCatColKeys[j]);

                if (subCatRowNr > mainCatRowNr && subCatRowNr < nextMainCatRowNr) {
                    let nextSubCatRowNr = j === filteredSubCatColKeys.length - 1 ? nextMainCatRowNr : parseInt(filteredSubCatColKeys[j+1]);

                    let subCat = {
                        title: subCatCol[subCatRowNr].v,
                        value: subCatValueCol[subCatRowNr] ? parseFloat(mainCatCol[subCatRowNr].v) : undefined,
                        questions: []
                    };
                    mainCat.subCats.push(subCat);

                    for (let k = 0; k < filteredQuestionColKeys.length; k++) {
                        let questionRowNr = parseInt(filteredQuestionColKeys[k]);

                        if(questionRowNr > subCatRowNr && questionRowNr < nextSubCatRowNr) {
                            let nextQuestionRowNr = k === filteredQuestionColKeys - 1 ? nextSubCatRowNr : parseInt(filteredQuestionColKeys[k+1]);

                            let question = {
                                title: questionCol[questionRowNr].v,
                                value: questionValueCol[questionRowNr] ? parseFloat(subCatCol[questionRowNr].v) : undefined,
                                details: []
                            };
                            subCat.questions.push(question);

                            for (let l = 0; l < detailColKeys.length; l++) {
                                let detailRowNr = parseInt(detailColKeys[l]);

                                if(detailRowNr > questionRowNr && detailRowNr < nextQuestionRowNr) {
                                    let detail = {
                                        title: detailCol[detailRowNr].v,
                                        value: detailValueCol[detailRowNr] ? parseFloat(questionCol[detailRowNr].v) : undefined
                                    };
                                    question.details.push(detail);
                                }
                            }
                        }
                    }
                }
            }

        }
        return mainCats;
    }

    restructureWorksheet(worksheet, colOffset = 0, rowOffset = 0) {
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
        return cols;
    }
}


export default angular.module('services.excel-service', [])
                      .service('excelService', ExcelService)
                      .name;