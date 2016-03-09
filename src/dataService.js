class DataService {
    constructor() {
    }

    prepareData(parsedData, maxScaleValue) {
        let data = this.aggregateValues(parsedData, maxScaleValue);
        data = this.assignColors(data);
        return data;
    }

    aggregateValues(mainCats, maxScaleValue) {
        if(maxScaleValue === undefined) throw new Error("Please provide the value scale's maximum (e.g. 100).");

        for(let mainCat of mainCats) {
            for(let subCat of mainCat.subCats) {
                let questionValueLists = [];
                for(let question of subCat.questions) {
                    let detailValueLists = [];
                    for(let detail of question.details) {
                        this.scaleValues(detail, maxScaleValue, detailValueLists);
                    }

                    if(question.values.length > 0) {
                        this.scaleValues(question, maxScaleValue, questionValueLists);
                    } else if(detailValueLists.length > 0) {
                        question.values = detailValueLists.map((detailValues) =>
                            detailValues.reduce((sum, next) => sum += next) / detailValues.length
                        );
                    }
                }

                if(subCat.values.length > 0) {
                    this.scaleValues(subCat, maxScaleValue);
                } else if(questionValueLists.length > 0) {
                    subCat.values = questionValueLists.map((questionValues) =>
                        questionValues.reduce((sum, next) => sum += next) / questionValues.length
                    );
                }
            }
        }
        return mainCats;
    }

    scaleValues(element, maxScaleValue, elementValueLists = []) {
        for(let i = 0; i < element.values.length; i++) {
            let value = element.values[i];
            if(value !== undefined) {
                let scaledValue = value / maxScaleValue;
                element.values[i] = scaledValue
                elementValueLists[i] = elementValueLists[i] === undefined ? [scaledValue] : elementValueLists[i].concat(scaledValue);
            }
        }
    }

    assignColors(mainCats) {
        let colorScale = [{r: 59, g: 128, b: 62, a: 1.0},
                {r: 90, g: 80, b: 140, a: 1.0},
                {r: 181, g: 48, b: 60, a: 1.0},
                {r: 27, g: 86, b: 166, a: 1.0},
                {r: 208, g: 89, b: 61, a: 1.0}],
            colorIdx = 0,
            sign = -1;

        for(let mainCat of mainCats) {
            let color = colorScale[colorIdx]
            mainCat.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

            for(let subCat of mainCat.subCats) {
                let opacity = 0.65 + sign * (Math.random() * 0.25);
                sign = sign * -1;
                subCat.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;

                for(let question of subCat.questions) {
                    question.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
                }
            }
            colorIdx = colorIdx === colorScale.length - 1 ? 0 : colorIdx + 1;
        }
        return mainCats;
    }
}


export default angular.module('services.data-service', [])
                      .service('dataService', DataService)
                      .name;