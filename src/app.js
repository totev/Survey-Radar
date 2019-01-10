import * as angular from 'angular';
import MainCtrl from './controllers/mainCtrl';
import OnChangeDirective from './directives/onChangeDirective';
import DataService from './services/dataService';
import ExcelService from './services/excelService';
import JSONService from './services/jsonService';
import SVGService from './services/svgService';
require('./dependencies');

angular.module('radarApp', ['colorpicker.module', OnChangeDirective, ExcelService, DataService, SVGService, JSONService])
       .controller('MainCtrl', MainCtrl);