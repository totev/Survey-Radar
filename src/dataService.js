class DataService {
    constructor() {
    }

    prepareData(parsedData, maxScaleValue) {
        let data = this.scaleValues(parsedData, maxScaleValue);
        data = this.assignColors(data);
        return data;
    }

    scaleValues(mainCats, maxScaleValue) {
        for(let mainCat of mainCats) {
            let subCatValues = [];
            for(let subCat of mainCat.subCats) {
                let questionValues = [];
                for(let question of subCat.questions) {
                    let detailValues = [];
                    for(let detail of question.details) {
                        if(!isNaN(detail.value)) {
                            detail.value = detail.value / maxScaleValue;
                            detailValues.push(detail.value);
                        }
                    }
                    if(!isNaN(question.value)) {
                        question.value = question.value / maxScaleValue;
                        questionValues.push(question.value);
                    } else if(detailValues.length > 0) {
                        question.value = detailValues.reduce((sum, next) => sum += next) / detailValues.length;
                        questionValues.push(question.value);
                    }
                }
                if(!isNaN(subCat.value)) {
                    subCat.value = subCat.value / maxScaleValue;
                    subCatValues.push(subCat.value);
                } else if(questionValues.length > 0) {
                    subCat.value = questionValues.reduce((sum, next) => sum += next) / questionValues.length;
                    subCatValues.push(subCat.value);
                }
            }
            if(!isNaN(mainCat.value))
                mainCat.value = mainCat.value / maxScaleValue;
            else if(subCatValues.length > 0)
                mainCat.value = subCatValues.reduce((sum, next) => sum += next) / subCatValues.length;
        }
        return mainCats;
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