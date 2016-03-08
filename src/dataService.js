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
            if(!isNaN(mainCat.value)) mainCat.value = mainCat.value / maxScaleValue;

            for(let subCat of mainCat.subCats) {
                if(!isNaN(subCat.value)) subCat.value = subCat.value / maxScaleValue;

                for(let question of subCat.questions) {
                    if(!isNaN(question.value)) question.value = question.value / maxScaleValue;

                    for(let detail of question.details) {
                        if(!isNaN(detail.value)) detail.value = detail.value / maxScaleValue;
                    }
                }
            }
        }
        return mainCats;
    }

    assignColors(mainCats) {
        let colorScale = [{r: 1, g: 1, b: 1, a: 1.0}],
            colorIdx = 0;

        for(let mainCat of mainCats) {
            let color = colorScale[colorIdx]
            mainCat.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

            for(let subCat of mainCat.subCats) {
                let opacity = 0.65 + (Math.random() * 0.4) - 0.2;
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