upload.controller('Load_Data_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {

        //01. Setting source 

        $rootScope.optionsModelTheme = {

            value_selected: '2'
        };


        // C-02.Set giá trị nhận vào đầu tiên của option
        $rootScope.optionsModelQuantity = {
            Page: 1,
            PageSize: '9'

        };
        // Set giá trị cho đầu ra của setting view data(ko xoá)
        $rootScope.optionsModelDisplay = {

            hienthi: ''
        };

        $rootScope.onChangePageSize = function(page_data) {

                $scope.DataBeginByPage = 0;
                var Title = "Success";
                var Message = "Cập nhật thành công !";
                var Type = "success";
                $scope.HQToast(Title, Message, Type);

                $scope.getDataPagination(page_data);

            }
            //01. End setting source


        $rootScope.getDataPagination = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                if (page_data == 'posts') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_all';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/posts.json';

                    // dữ liệu offline
                    // var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/order.json';
                }
                if (page_data == 'order' || option_value == 'all') {

                    // vì là dữ liệu tĩnh nên phải dùng nhiều API để load dữ liệu ..khi chuyển sang sử dụng CSDL chi dùng 1 API để load dữ liệu kèm theo biến option value truyền đến controller 
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/donhang.json';
                    if (option_value == 'processed') {
                        var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/donhang-processed.json';

                    }
                    if (option_value == 'no_processed') {
                        var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/donhang-no-processed.json';

                    }
                    if (option_value == 'transport') {
                        var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/donhang-transport.json';

                    }
                    if (option_value == 'complete') {
                        var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/donhang-complete.json';

                    }
                }
                if (page_data == 'preview_order') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/chitiet-donhang.json';
                }
                if (page_data == 'product') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/product.json';
                }
                if (page_data == 'category') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/category.json';
                }
                if (page_data == 'comment') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/comment.json';
                }
                if (page_data == 'client') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/client.json';
                }
                if (page_data == 'assess') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/assess.json';
                }
                if (page_data == 'baner') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/baner.json';
                }


                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)


        // Get dữ liệu đã xoá(bộ nhớ tạm)
        $rootScope.getDataBoxTrash = function(page_data, page_function) {
                // alert($rootScope.info[0].level);
                // alert(page_data);
                // code chỉnh sửa theo yêu cầu dự án

                if (page_data == 'posts') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/data-trash.json';
                }
                if (page_data == 'product') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/data-trash-product.json';
                }
                if (page_data == 'category') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/data-trash-category.json';
                }
                if (page_data == 'baner') {
                    // var URL_API_Load = 'https://hqmultimedia.github.io/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/data-trash-baner.json';
                }


                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_box_trash = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
            // End get dữ liệu đã xoá(bộ nhớ tạm)

        // test 
        $rootScope.getDataOrder = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)

        $rootScope.getDataOrder_2 = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart_2.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.LocationBaner = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'https://hqmultimedia.github.io/web-app-admin/Data/location_baner.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);




                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)

        // end test

    }) //End controller FunctionController