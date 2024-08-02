upload.controller('Function_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {


        // A.Thiết lập thông số
        // biến avatar_update là biến dự phòng dùng cho việc update avatar
        var avatar_update = '';
        // A-1 .Function set localStorage cho login 

        $rootScope.set_localStorage = function(avatar_update, id_reload, name_reload, level_reload) {
            // mặc định avartar_update = null nếu avatar update có dữ liệu thì lấy dữ liệu của avtar update 
            // ngược lại thì lấy dữ liệu mặc định của user
            if (avatar_update != '') {
                $rootScope.avatar = avatar_update;
                $rootScope.id = id_reload;
                $rootScope.name = name_reload;
                $rootScope.level = level_reload;


            }
            // Tạo biến lưu dữ liệu
            $scope.dataLogin = [

                { name: $rootScope.name, level: $rootScope.level, avatar: $rootScope.avatar, id: $rootScope.id }

            ];
            // Lưu data user vào localStorage
            localStorage.setItem('data_Login', angular.toJson($scope.dataLogin));

            // Lấy data user từ localStorage
            $rootScope.info = angular.fromJson(localStorage.getItem("data_Login"));


        }

        //B. luồng xử lý dữ liệu login  (sau khi đăng nhập )
        // TH1 : sau khi click nút đăng nhập thì tiến hành set localStorage 
        if ($rootScope.login_status) {

            // gọi đến function set localStorage
            $rootScope.set_localStorage(avatar_update);


        }


        //TH2 : khi F5 trang ( logic ngăn chặn khi chưa login )
        // if (!localStorage.getItem("data_Login")) {

        //     $location.path('/login');



        // } else {
        //     // get lại dữ liệu user từ localstorage
        //     $rootScope.info = angular.fromJson(localStorage.getItem("data_Login"));
        // }






        // logout
        $scope.button_logout = function() {
                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }
                $http.post('http://localhost/Angular2026/admin/LoginRegisterController/logout_remove_session_php', config)
                    .then(function(res) {

                        // Remove localStorage
                        localStorage.removeItem('data_Login');
                        // Chuyển trang
                        $location.path('/login');
                        var Title = "Success";
                        var Message = "Đăng xuất thành công !";
                        var Type = "success";
                        $scope.HQToast(Title, Message, Type);
                        // tải lại trang
                        // location.reload();

                    }, function(er) {

                        console.log(er.data)
                    })
            }
            // End logout

        // Add-update




        $scope.upload = function(one_data, page_data, page_function) {

            if (page_data == 'posts') {
                var URL_Upload = 'http://localhost/Angular2026/admin/upload_file/data';
                // add
                if (page_function == 'posts_add') {
                    var URL_Function = 'http://localhost/Angular2026/admin/CrudDataController/add';
                }
                // update
                if (page_function == 'posts_update') {
                    var URL_Function = 'http://localhost/Angular2026/admin/CrudDataController/update';
                }



            }



            // menu hay user sau url API chỉ là tham số xác định hình ảnh thuộc thư mục nào





            // end set url
            var fd = new FormData();
            angular.forEach($scope.uploadfiles, function(file) {
                fd.append('source_file[]', file);
            });

            $http({
                method: 'post',
                // url: 'http://localhost/Angular2026/admin/upload_file/user',
                url: URL_Upload,
                data: fd,
                headers: {
                    'Content-Type': undefined
                },
            }).then(function successCallback(res) {
                // Store response data
                // $scope.response = res.data;
                $scope.arrayImage = res.data;
                console.log(res.data);

                // add data

                if (page_function == 'posts_add') {

                    var dulieu = $.param({
                        // trường dữ liệu CSDL - trường name trong input view
                        posts_name: $scope.posts.name,
                        category_id: $scope.menu.value_selected,
                        posts_sort: $scope.posts.sort,
                        posts_tags: $scope.posts.tags,
                        posts_content: $scope.posts.description,

                        posts_img: $scope.arrayImage.img,
                        posts_img_thumb: $scope.arrayImage.img_thumb

                    });
                }








                // update data

                if (page_function == 'posts_update') {

                    var dulieu = $.param({
                        // trường dữ liệu CSDL - trường name trong input view
                        posts_id: one_data.data_id,
                        posts_name: one_data.data_name,
                        category_id: one_data.menu_id,
                        posts_sort: one_data.data_sort,
                        posts_tags: one_data.data_tags,
                        posts_content: one_data.data_content,

                        posts_img: $scope.arrayImage.img,
                        posts_img_thumb: $scope.arrayImage.img_thumb,
                        posts_img_old: one_data.data_img,
                        posts_img_thumb_old: one_data.data_img_thumb
                            //dữ liệu menu cấp 1 update
                            // menu_update: one_data.menu_name,

                    });

                }

                // console.log(dulieu);
                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }
                $http.post(URL_Function, dulieu, config)
                    .then(function(res) {
                        // trường hợp thành công thì gọi hàm showSimpleToast để thông báo
                        // $scope.showSimpleToast();
                        console.log(res.data);
                        if (res.data == 'thêm thành công') {
                            $scope.button_reset_input();
                            // document.getElementById("button_reset_input").click();
                            // document.getElementById('button_reset_img').value = null;
                            // clearFileInput(document.getElementById("button_reset_img"));
                            // $("#button_reset_img").val("");


                            // set dữ liệu và gọi đến hàm thông báo
                            var Title = "Success";
                            var Message = "Thêm thành công !";
                            var Type = "success";
                            $scope.HQToast(Title, Message, Type);
                            $scope.getDataPagination(page_data);
                            // phần check box
                            var checkboxAll = $('#check_all');
                            checkboxAll.prop('checked', false);
                            $rootScope.itemSelectedModel = [];

                        }
                        if (res.data == 'update thành công') {
                            // $scope.button_reset_input();
                            // set dữ liệu và gọi đến hàm thông báo
                            var Title = "Success";
                            var Message = "Update thành công !";
                            var Type = "success";
                            $scope.HQToast(Title, Message, Type);



                            $rootScope.getDataPagination(page_data);

                        }
                        if (res.data == 'dữ liệu trùng lặp') {
                            // set dữ liệu và gọi đến hàm thông báo
                            var Title = "Warning";
                            var Message = "Dữ liệu trùng lặp!";
                            var Type = "warning";
                            $scope.HQToast(Title, Message, Type);

                            $scope.getDataPagination(page_data);

                        }


                    }, function(er) {
                        // function(er) trường hợp thất bại gọi đến hàm showActionToast();
                        // $scope.showActionToast();
                        console.log(er.data);

                        // Hàm này chỉ chạy khi url add xảy ra lỗi : sai url ...


                    })
                    // end add data




            });



            // end upload anh


        }

        // End add-update
        // Delete
        // --------------------------------------------------------------------------------------F.DELETE
        // F-01.Hiển thị view delete
        $scope.Delete = function(one_data) {

                one_data.viewDelete = !one_data.viewDelete;
            } //End view Delete

        // Delete act
        $scope.deleteAct = function(one_data, page_data) {


                if (page_data == 'posts') {
                    var dulieu = $.param({
                        // tên biến sẽ lấy bên controller - tên dữ liệu nằm trong one_data được truyền vào
                        data: $rootScope.itemSelectedModel,
                        id: one_data.data_id,
                        img: one_data.data_img,
                        img_thumb: one_data.data_img_thumb
                    });
                    // console.log(dulieu);
                    var URL_API_Delete = 'http://localhost/Angular2026/admin/CrudDataController/delete';
                }





                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }

                $http.post(URL_API_Delete, dulieu, config)

                .then(function(res) {
                    console.log(res.data);

                    // set dữ liệu và gọi đến hàm thông báo lỗi
                    if (res.data == 'Dữ liệu menu con đầy' || res.data == 'Dữ liệu category đầy' || res.data == 'delete user thất bại' || res.data == 'delete data thất bại') {

                        var Title = "Warning";
                        var Message = "Không thể xoá khi table đang chứa dữ liệu !";
                        var Type = "warning";
                        $scope.HQToast(Title, Message, Type);

                    } else {
                        // set dữ liệu và gọi đến hàm thông báo thành công
                        var Title = "Success";
                        var Message = "Delete thành công !";
                        var Type = "success";
                        $scope.HQToast(Title, Message, Type);
                        $rootScope.itemSelectedModel = [];
                        $scope.optionCheckBox = '';
                    }
                    // tắt view delete
                    one_data.viewDelete = !one_data.viewDelete;


                    // function thành công của hàm delete
                    $scope.getDataPagination(page_data);
                    $scope.getDataBoxTrash(page_data);



                }, function(er) {
                    // function(er) trường hợp thất bại gọi đến hàm showActionToast();
                    let TypeActErr = "DeleteErr";
                    console.log(er.data)
                })

            } // 07.End delete act
            // move_item_to_trash
        $scope.move_item_to_trash = function(one_data, page_data) {


                if (page_data == 'posts') {
                    var dulieu = $.param({
                        // tên biến sẽ lấy bên controller - tên dữ liệu nằm trong one_data được truyền vào
                        data: $rootScope.itemSelectedModel,
                        id: one_data.data_id,
                        img: one_data.data_img,
                        img_thumb: one_data.data_img_thumb
                    });
                    // console.log(dulieu);
                    var URL_API_Move_items = 'http://localhost/Angular2026/admin/CrudDataController/move_item_to_trash';
                }





                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }

                $http.post(URL_API_Move_items, dulieu, config)

                .then(function(res) {
                    console.log(res.data);

                    // set dữ liệu và gọi đến hàm thông báo lỗi
                    if (res.data == 'Dữ liệu menu con đầy' || res.data == 'Dữ liệu category đầy' || res.data == 'delete user thất bại' || res.data == 'delete data thất bại') {

                        var Title = "Warning";
                        var Message = "Không thể xoá khi table đang chứa dữ liệu !";
                        var Type = "warning";
                        $scope.HQToast(Title, Message, Type);

                    } else {
                        // set dữ liệu và gọi đến hàm thông báo thành công
                        var Title = "Success";
                        var Message = "Delete thành công !";
                        var Type = "success";
                        $scope.HQToast(Title, Message, Type);
                        $rootScope.itemSelectedModel = [];
                        $scope.optionCheckBox = '';
                    }
                    // tắt view delete
                    one_data.viewDelete = !one_data.viewDelete;


                    // function thành công của hàm delete
                    $scope.getDataPagination(page_data);
                    $scope.getDataBoxTrash(page_data);



                }, function(er) {
                    // function(er) trường hợp thất bại gọi đến hàm showActionToast();
                    let TypeActErr = "DeleteErr";
                    console.log(er.data)
                })

            } // 08.End move_item_to_trash

        // End delete
        // Show
        $scope.ShowAct = function(one_data, page_data) {



                if (page_data == 'posts') {
                    var dulieu = $.param({
                        // tên biến sẽ lấy bên controller - tên dữ liệu nằm trong one_data được truyền vào
                        data: $rootScope.itemSelectedModel
                            // id: one_data.id,
                            // trangthai: one_data.user_status

                    });

                    // console.log(dulieu);

                    var URL_API_Show = 'http://localhost/Angular2026/admin/CrudDataController/show_items';
                }


                // console.log(one_data.id);


                // console.log(dulieu);
                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }
                $http.post(URL_API_Show, dulieu, config)
                    .then(function(res) {
                        console.log(res.data);
                        // set dữ liệu và gọi đến hàm thông báo
                        var Title = "Success";
                        var Message = "Thao tác thành công !";
                        var Type = "success";
                        $scope.HQToast(Title, Message, Type);
                        $scope.getDataPagination(page_data);
                        $rootScope.itemSelectedModel = [];
                        $scope.optionCheckBox = '';
                        // bỏ check box all
                        var checkboxAll = $('#check_all');
                        checkboxAll.prop('checked', false);

                    }, function(er) {
                        // set dữ liệu và gọi đến hàm thông báo
                        let TypeActErr = "Hidden-Show-Err";
                        console.log(er.data)
                    })

            }
            // End Show
            // Hidden
        $scope.HiddenAct = function(one_data, page_data) {



                if (page_data == 'posts') {
                    var dulieu = $.param({
                        // tên biến sẽ lấy bên controller - tên dữ liệu nằm trong one_data được truyền vào
                        data: $rootScope.itemSelectedModel,
                        data2: $rootScope.itemSelectedModel_2
                            // id: one_data.id,
                            // trangthai: one_data.user_status

                    });

                    // console.log(dulieu);

                    var URL_API_Hidden = 'http://localhost/Angular2026/admin/CrudDataController/hidden_items';
                }


                // console.log(one_data.id);


                // console.log(dulieu);
                var config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    }

                }
                $http.post(URL_API_Hidden, dulieu, config)
                    .then(function(res) {
                        console.log(res.data);
                        if (res.data == 'vui lòng chọn data') {
                            var Title = "Info";
                            var Message = "Vui lòng lựa chọn dữ liệu cần thao tác !";
                            var Type = "info";
                            $scope.HQToast(Title, Message, Type);
                            // $scope.getDataPagination(page_data);
                            // $rootScope.itemSelectedModel = [];
                            // $scope.optionCheckBox = '';
                        } else {
                            var Title = "Success";
                            var Message = "Thao tác thành công !";
                            var Type = "success";
                            $scope.HQToast(Title, Message, Type);
                            $scope.getDataPagination(page_data);
                            $scope.getDataBoxTrash(page_data);
                            $rootScope.itemSelectedModel = [];
                            $scope.optionCheckBox = '';
                            // bỏ check box all
                            var checkboxAll = $('#check_all');
                            checkboxAll.prop('checked', false);
                        }
                        // set dữ liệu và gọi đến hàm thông báo




                    }, function(er) {
                        // set dữ liệu và gọi đến hàm thông báo
                        let TypeActErr = "Hidden-Show-Err";
                        console.log(er.data)
                    })

            }
            // End Hidden



    }) //End controller FunctionController