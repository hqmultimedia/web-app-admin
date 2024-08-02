upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/login', { templateUrl: 'content-admin-panel/page/view-login-register.html', controller: 'LoginRegisterController' })

    .when('/home', { templateUrl: 'content-admin-panel/page/home-admin.html', controller: 'Function_Controller' })
        //Link 2 
        .when('/don-hang', { templateUrl: 'content-admin-panel/page/order.html', controller: 'Function_Controller' })
        .when('/chi-tiet-don-hang/:id', { templateUrl: 'content-admin-panel/page/chitiet-donhang.html', controller: 'Function_Controller' })
        // Link 3   
        .when('/posts', { templateUrl: 'content-admin-panel/page/posts.html', controller: 'Function_Controller' })
        .when('/category', { templateUrl: 'content-admin-panel/page/category.html', controller: 'Function_Controller' })
        .when('/comment', { templateUrl: 'content-admin-panel/page/comment.html', controller: 'Function_Controller' })
        .when('/assess', { templateUrl: 'content-admin-panel/page/assess.html', controller: 'Function_Controller' })
        .when('/san-pham', { templateUrl: 'content-admin-panel/page/product.html', controller: 'Function_Controller' })
        .when('/khach-hang', { templateUrl: 'content-admin-panel/page/client.html', controller: 'Function_Controller' })
        // Link 04
        .when('/layout', { templateUrl: 'content-admin-panel/page/setting-layout.html', controller: 'Function_Controller' })
        .when('/color-package', { templateUrl: 'content-admin-panel/page/setting-color-package.html', controller: 'Function_Controller' })
        .when('/baner', { templateUrl: 'content-admin-panel/page/setting-baner.html', controller: 'Function_Controller' })

    .otherwise({ redirectTo: '/home' })

    $locationProvider.html5Mode(true);


});