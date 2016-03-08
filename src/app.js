import MainCtrl from './mainCtrl'
import OnChangeDirective from './onChangeDirective'
import ExcelService from './excelService'
import DataService from './dataService'
import DownloadService from './downloadService'

angular.module('radarApp', ['colorpicker.module', OnChangeDirective, ExcelService, DataService, DownloadService])
       .controller('MainCtrl', MainCtrl);