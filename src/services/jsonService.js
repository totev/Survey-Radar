class JSONService {
    constructor($window, $timeout, $q) {
        this.$window = $window;
        this.$timeout = $timeout;
        this.$q = $q;
    }

    downloadDataConfig(originalData, editedData) {
        this.downloadJSON(this.assertDiff(originalData, editedData), 'dataConfig');
    }

    downloadConfig(cfg) {
        this.downloadJSON(cfg, 'config');
    }

    downloadJSON(obj, name) {
        let url = this.$window.URL.createObjectURL(new Blob([JSON.stringify(obj)], { "type" : "application/json" }));

        let a = this.$window.document.createElement("a");
        body.appendChild(a);
        a.setAttribute("download", name + ".json");
        a.setAttribute("href", url);
        a.style["display"] = "none";
        a.click();

        let self = this;
        this.$timeout(() => self.$window.URL.revokeObjectURL(url), 10);
    }

    assertDiff(originalData, editedData) {
        let mainCatDiff = {},
            subCatDiff = {},
            questionDiff = {},
            detailDiff = {};

        editedData.forEach((mainCat, idx) => {
            let origMainCat = originalData[idx];
            if(mainCat.mainCat !== origMainCat.mainCat) {
                mainCatDiff[origMainCat.mainCat] = mainCat.mainCat;
            }
            mainCat.subCats.forEach((subCat, idx) => {
                let origSubCat = origMainCat.subCats[idx]
                if(subCat.title !== origSubCat.title) {
                    subCatDiff[origSubCat.title] = subCat.title
                }
                subCat.questions.forEach((question, idx) => {
                    let origQuestion = origSubCat.questions[idx];
                    if(question.title !== origQuestion.title) {
                        questionDiff[origQuestion.title] = question.title;
                    }
                    question.details.forEach((detail, idx) => {
                        let origDetail = origQuestion.details[idx];
                        if(detail.title !== origDetail.title) {
                            detailDiff[origDetail.title] = detail.title;
                        }
                    })
                });
            });
        });

        return {mainCats: mainCatDiff, subCats: subCatDiff, questions: questionDiff, details: detailDiff};
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
                    let dataConfig = JSON.parse(data)
                    deferred.resolve(dataConfig);
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

    merge(currentData, {mainCats, subCats, questions, details}) {
        currentData.forEach((mainCat) => {
            let changedMainCat = mainCats[mainCat.mainCat];
            if(changedMainCat !== undefined) mainCat.mainCat = changedMainCat;
            mainCat.subCats.forEach((subCat) => {
                let changedSubCat = subCats[subCat.title];
                if(changedSubCat !== undefined) subCat.title = changedSubCat;
                subCat.questions.forEach((question) => {
                    let changedQuestion = questions[question.title];
                    if(changedQuestion !== undefined) question.title = changedQuestion;
                    question.details.forEach((detail) => {
                        let changedDetail = details[detail.title];
                        if(changedDetail !== undefined) detail.title = changedDetail;
                    })
                });
            });
        });
    }
}

export default angular.module('services.json-service', [])
                      .service('jsonService', JSONService)
                      .name;