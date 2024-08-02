upload.controller('checkBoxBanner', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {


    // check box banner
    $scope.location = [
        { value: 1, name: 'Trang chủ' },
        { value: 2, name: 'Trang bài viết' },
        { value: 3, name: 'Trang tìm kiếm' }
    ];

    $rootScope.itemSelectedModel = [];

    // one check
    $scope.toggleSelectionItem = function(item) {
            // $scope.location hoặc data_get là dữ liệu vòng lặp 
            var total_item = $scope.location.length;
            // tìm checkbox dc chọn có trong mảng hay chưa ?
            var idx = $rootScope.itemSelectedModel.indexOf(item);

            var checkboxAllLocation = $('#id_check_all');
            //$rootScope.selected.length : item dc selected
            // $scope.data_get.length : tổng số item trong csdl
            // logic : nếu item dc select bằng với tổng item thì phần(else) push vào mảng thì button chọn tất cả sẽ dc checked
            // splice : loại trừ 1 phần tử
            // push : thêm 1 phần tử

            if (idx > -1) {
                $rootScope.itemSelectedModel.splice(idx, 1)
                var item_selected = $rootScope.itemSelectedModel.length;
                if (item_selected < total_item) {

                    checkboxAllLocation.prop('checked', false);
                }

            } else {
                $rootScope.itemSelectedModel.push(item);
                var item_selected = $rootScope.itemSelectedModel.length;

                if (item_selected == total_item) {

                    checkboxAllLocation.prop('checked', true);
                }


            }

            var data = $rootScope.itemSelectedModel;

        }
        // check all 
    $scope.checkAllItems = function() {

            //01.Code xử lý phần check và uncheck
            var checkboxAllLocation = $('#id_check_all');
            //isCheckAll: dòng để trả về true or flase
            var ischeckAllItems = checkboxAllLocation.prop('checked');
            // one_item_element : là các checkbox có name là dạng mảng
            var one_item = $('input[name="items_name[]"]');
            // nếu true thì check và ngược lại
            if (ischeckAllItems) {
                one_item.prop('checked', true);
            } else {
                one_item.prop('checked', false);
            }
            //01.End code xử lý phần check và uncheck





            //02.Code xử lý push vào mảng
            // nếu có selectAllItemModel (ng-model trong ng click check all) thì chạy đoạn code push vào mảng
            if ($scope.selectAllItemModel) {
                angular.forEach($scope.location, function(item) {
                    idx = $rootScope.itemSelectedModel.indexOf(item);
                    if (idx >= 0) {
                        return true;
                    } else {
                        $rootScope.itemSelectedModel.push(item);

                    }
                })
            } else {
                $rootScope.itemSelectedModel = [];
            }

            //02.End code xử lý push vào mảng
            // console.log($rootScope.itemSelectedModel);
        }
        // end checkbox add banner 






})