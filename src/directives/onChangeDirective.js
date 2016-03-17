function customOnChange() {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            var onChangeHandler = scope.$eval(attrs.customOnChange);
            var controllerAs = attrs.customOnChange.split('.');
            if(controllerAs.length == 2)
                element.bind('change', onChangeHandler.bind(scope[controllerAs[0]], element[0]));
            else
                element.bind('change', onChangeHandler);
        }
    };
}

export default angular.module('directives.customOnChange', [])
                      .directive('customOnChange', customOnChange)
                      .name;