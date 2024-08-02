// fix number
upload.directive('stringToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                return '' + value;
            });
            ngModel.$formatters.push(function(value) {
                return parseFloat(value);
            });
        }
    };
});
// End fix number
// CKEDITOR

upload.directive('ckEditor', function() {
    return {
        require: '?ngModel',
        link: function(scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0], {
                filebrowserBrowseUrl: '../library/ckeditor/ckfinder/ckfinder.html',
                filebrowserUploadUrl: '../library/ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',

            });

            if (!ngModel) return;

            ck.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render = function(value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});
// END CKEDITOR
// ------------------------------------------------------------------------------------------A.ROUTE

// ---------------------------------------------------------------------------Upload file
upload.directive('ngFile', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('change', function() {

                $parse(attrs.ngFile).assign(scope, element[0].files)
                scope.$apply();
            });
        }
    };
}]);

// End Upload file