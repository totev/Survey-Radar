import MainCtrl from './mainCtrl'
import OnChangeDirective from './onChangeDirective'
import ExcelService from './excelService'
import DataService from './dataService'

angular.module('radarApp', ['colorpicker.module', OnChangeDirective, ExcelService, DataService])
       .controller('MainCtrl', MainCtrl);