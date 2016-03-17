import MainCtrl from './controllers/mainCtrl'
import OnChangeDirective from './directives/onChangeDirective'
import ExcelService from './services/excelService'
import DataService from './services/dataService'
import SVGService from './services/svgService'

angular.module('radarApp', ['colorpicker.module', OnChangeDirective, ExcelService, DataService, SVGService])
       .controller('MainCtrl', MainCtrl);