import {Radar1, Radar2} from './../radarLib/index.js'

export default class MainCtrl {
    constructor($scope, $timeout, excelService, dataService, svgService) {
        this.cfg = Radar2.cfg;

        $scope.$watch(() => this.cfg, this.configWatcher.bind(this), true);
        $scope.$watch(() => this.mainCats, this.dataWatcher.bind(this), true);

        this.$scope = $scope;
        this.$timeout = $timeout;
        this.excelService = excelService;
        this.dataService = dataService;
        this.downloadService = svgService;
    }

    render(mainCats = this.mainCats) {
        console.info((new Date()).toLocaleTimeString() + ": Rendering Radars")
        this.renderRadar1(mainCats, this.cfg);
        this.renderRadar2(mainCats, this.cfg);
    }

    renderRadar1(mainCats, cfg) {
        let r1 = new Radar1(mainCats, cfg);
        r1.render('#surveyRadar1');
    }

    renderRadar2(mainCats, cfg) {
        let r2 = new Radar2(mainCats, cfg);
        r2.render('#surveyRadar2');
    }

    reset() {
        this.cfg = JSON.parse(JSON.stringify(Radar2.cfg));
        this.$scope.$apply(); //TODO doesn't work yet
    }


    // User change/input processing
    configWatcher(newVal, oldVal) {
        if(oldVal !== newVal) {
            if(oldVal.w !== newVal.w && newVal.w !== newVal.h)
                newVal.h = newVal.w;
            else if(oldVal.h !== newVal.h && newVal.h !== newVal.w)
                newVal.w = newVal.h;
            else {
                this.$timeout.cancel(this.timeoutPromise);
                this.timeoutPromise = this.$timeout(() => {
                    this.render();
                }, 400);
            }
        }
    }

    dataWatcher(newVal, oldVal) {
        if(oldVal !== newVal) {
            this.$timeout.cancel(this.timeoutPromise);
            this.timeoutPromise = this.$timeout(() => {
                this.render();
            }, 400);
        }
    }

    // File handling

    handleFile(input, event) {
        if(input.files.length > 0) {
            this.selectedFile = input.files[0];
        }
        this.excelService.handleFile(event).then(
            (workbook) => {
                this.workbook = workbook;
            },
            (exception) => console.error('fail', exception)
        );
    }

    parseFile(sheetName, offsetCol, offsetRow) {
        let worksheet = this.workbook.Sheets[sheetName];
        this.parsedWorkbook = this.excelService.restructureWorksheet(worksheet, offsetCol, offsetRow);
        this.workbookCols = Object.keys(this.parsedWorkbook.cols).map(key => ({key: parseInt(key), name: this.parsedWorkbook.cols[key].colName}));
        this.mainCats = undefined;
    }

    parseMainCats(parseCfg) {
        let pw = this.excelService.detailParsing(this.parsedWorkbook, parseCfg.mainCatCol, parseCfg.subCatCol, parseCfg.questionCol, parseCfg.detailCol, parseCfg.valueCols);
        this.mainCats = this.dataService.prepareData(pw, parseCfg.maxScaleValue); // rerender triggered automatically by watcher
    }

    downloadSVG(svgContainerId) {
        this.downloadService.downloadSVG(svgContainerId);
    }

    downloadDataConfig() {
        this.downloadService.downloadDataConfig(this.mainCats);
    }
}

MainCtrl.mainCats = [];