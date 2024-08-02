upload.controller('checkBoxController', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {


    $scope.option_act = function(optionCheckBox, page_data) {
        // gọi đến hàm $rootScope.getDataPagination với biến page_data(posts)
        var one_data = $scope.data_get;

        if (optionCheckBox == 'delete') {
            $scope.deleteAct(one_data, page_data);
            // $scope.move_item_to_trash(one_data, page_data);
        }
        if (optionCheckBox == 'move-to-trash') {
            $scope.move_item_to_trash(one_data, page_data);
        }
        if (optionCheckBox == 'hidden') {
            $scope.HiddenAct(one_data, page_data);
        }
        if (optionCheckBox == 'show') {
            $scope.ShowAct(one_data, page_data);
        }


    }


    $rootScope.itemSelectedModel = [];

    // one check
    $scope.toggleSelectionItem = function(item) {
            // $scope.data_get hoặc data_get là dữ liệu vòng lặp 
            var total_item = $scope.data_get.length;
            // tìm checkbox dc chọn có trong mảng hay chưa ?
            var idx = $rootScope.itemSelectedModel.indexOf(item);

            var checkboxAll = $('#id_check_all');
            //$rootScope.selected.length : item dc selected
            // $scope.data_get.length : tổng số item trong csdl
            // logic : nếu item dc select bằng với tổng item thì phần(else) push vào mảng thì button chọn tất cả sẽ dc checked
            // splice : loại trừ 1 phần tử
            // push : thêm 1 phần tử

            if (idx > -1) {
                $rootScope.itemSelectedModel.splice(idx, 1)
                var item_selected = $rootScope.itemSelectedModel.length;
                if (item_selected < total_item) {

                    checkboxAll.prop('checked', false);
                }

            } else {
                $rootScope.itemSelectedModel.push(item);
                var item_selected = $rootScope.itemSelectedModel.length;

                if (item_selected == total_item) {

                    checkboxAll.prop('checked', true);
                }


            }

            var data = $rootScope.itemSelectedModel;

        }
        // check all 
    $scope.checkAllItems = function() {


            //01.Code xử lý phần check và uncheck
            var checkboxAll = $('#id_check_all');
            //isCheckAll: dòng để trả về true or flase
            var ischeckAllItems = checkboxAll.prop('checked');
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
                angular.forEach($scope.data_get, function(item) {
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

        }
        // --------------------test






    $scope.option_act_2 = function(optionCheckBox, page_data) {

        // gọi đến hàm $rootScope.getDataPagination với biến page_data(posts)
        var one_data = $scope.data_get_box_trash;
        if (optionCheckBox == 'delete') {
            $scope.deleteAct(one_data, page_data);
            // $scope.move_item_to_trash(one_data, page_data);
        }
        if (optionCheckBox == 'move-to-trash') {
            $scope.move_item_to_trash(one_data, page_data);
        }
        if (optionCheckBox == 'hidden') {
            $scope.HiddenAct(one_data, page_data);
        }
        if (optionCheckBox == 'show') {
            $scope.ShowAct(one_data, page_data);
        }


    }









    $rootScope.itemSelectedModel_2 = [];

    // one check
    $scope.toggleSelectionItem_2 = function(item) {
            // $scope.data_get hoặc data_get là dữ liệu vòng lặp 
            var total_item = $scope.data_get_box_trash.length;
            // tìm checkbox dc chọn có trong mảng hay chưa ?
            var idx = $rootScope.itemSelectedModel_2.indexOf(item);

            var checkboxAll = $('#id_check_all_2');
            //$rootScope.selected.length : item dc selected
            // $scope.data_get.length : tổng số item trong csdl
            // logic : nếu item dc select bằng với tổng item thì phần(else) push vào mảng thì button chọn tất cả sẽ dc checked
            // splice : loại trừ 1 phần tử
            // push : thêm 1 phần tử

            if (idx > -1) {
                $rootScope.itemSelectedModel_2.splice(idx, 1)
                var item_selected = $rootScope.itemSelectedModel_2.length;
                if (item_selected < total_item) {

                    checkboxAll.prop('checked', false);
                }

            } else {
                $rootScope.itemSelectedModel_2.push(item);
                var item_selected = $rootScope.itemSelectedModel_2.length;

                if (item_selected == total_item) {

                    checkboxAll.prop('checked', true);
                }


            }

            var data = $rootScope.itemSelectedModel_2;

        }
        // check all 
    $scope.checkAllItems_2 = function() {

        //01.Code xử lý phần check và uncheck
        var checkboxAll = $('#id_check_all_2');
        //isCheckAll: dòng để trả về true or flase
        var ischeckAllItems = checkboxAll.prop('checked');
        // one_item_element : là các checkbox có name là dạng mảng
        var one_item = $('input[name="items_name_2[]"]');
        // nếu true thì check và ngược lại
        if (ischeckAllItems) {
            one_item.prop('checked', true);
        } else {
            one_item.prop('checked', false);
        }
        //01.End code xử lý phần check và uncheck





        //02.Code xử lý push vào mảng
        // nếu có selectAllItemModel (ng-model trong ng click check all) thì chạy đoạn code push vào mảng
        if ($scope.selectAllItemModel_2) {
            angular.forEach($scope.data_get_box_trash, function(item) {
                idx = $rootScope.itemSelectedModel_2.indexOf(item);
                if (idx >= 0) {
                    return true;
                } else {
                    $rootScope.itemSelectedModel_2.push(item);

                }
            })
        } else {
            $rootScope.itemSelectedModel_2 = [];
        }

        //02.End code xử lý push vào mảng


    }
})