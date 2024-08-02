// ------------------------------------------------------------A.Trước khi đăng nhập : phần on view login
// sau khi đăng nhập xong đây là js ẩn đi menu content footer

function hidden_menu_footer() {
    // menu
    $('.sidebar-menu-setting').addClass('on-view-login');
    // sidebar
    $('.box-sidebar').addClass('on-view-login');
    // content
    $('.box-content-footer').addClass('on-view-login');
    $('.view-include').addClass('on-view-login');
    // footer
    $('.sidebar-footer-setting').addClass('on-view-login');

}
// ------------------------------------------------------------B.Sau khi đăng nhập : phần admin
// sau khi đăng nhập xong đây là js hiển thị lại menu content footer

function show_menu_footer() {

    // menu
    $('.sidebar-menu-setting').removeClass('on-view-login');
    // sidebar
    $('.box-sidebar').removeClass('on-view-login');
    // content
    $('.box-content-footer').removeClass('on-view-login');
    $('.view-include').removeClass('on-view-login');
    // footer
    $('.sidebar-footer-setting').removeClass('on-view-login');


}
// ------------------------------------------------------------------------------C.SHOW BOX SELECT THEME LAYOUT
// Đây là jquery để hiển thị box selected theme color, theme layout

function Show_off_menu_setting() {

    $('.show_setting').click(function() {


        $('.box-setting-content').toggleClass('show');
        $('.box-setting').toggleClass('show');


    });
    $('.box-setting-icon-close , .box-overlay').click(function() {


        $('.box-setting-content').removeClass('show');
        $('.box-setting').removeClass('show');


    });

}
// --------------------------------------------------------------------1.SIDEBAR
// Jquery xử lý sidebar scroll box theme basic
function Sidebar_scrollBox() {

    $('.scroll_title').hover(function() {
        // tạo biến locatio để tính ra vị trí(trái) link được hover
        var location = $(this).offset().left;
        // bình thường khi muốn dropdown xổ xuống dàn hết full màn hình thì sẽ ko cần đến location_center
        // biến location_center dc dùng khi muốn dropdown dc xổ xuống cách màn hình trái và phải 1 giá trị xác định
        // khi thay đổi giá trị ở jquery thì tại css phải thay đổi gấp đôi giá trị dc thay đổi ở jquery  
        var location_center = (location - 100);

        // drop-center dùng để phân biệt giữa kiểu dropdown basic và dropdown center
        $(this).next('.drop-center').css('left', '-' + location_center + 'px');

    });

    //2 
    $('.scroll_title').click(function() {
        // cho tất cả các link thu lại
        // $('.scroll_content').slideUp(800);
        $('.scroll_content').slideUp(0);
        $('.drop-center').removeClass('remove-display');
        $('.scroll_title').removeClass('hoverColor selected ');
        // cho link dc click dropdown xuống
        $(this).next('.scroll_content').slideToggle(0);
        // fix cho dropdown center
        $(this).next('.drop-center').toggleClass('remove-display');
        $(this).toggleClass('hoverColor');
        $(this).toggleClass('selected');
        $(this).children().toggleClass('show');


    });




    $('.link-scroll ').click(function() {
        $('.icon-link-dropdown').css('color', 'white');
        $(this).children('.icon-link-dropdown').css('color', '#38c786');

        $('.ul-level-3').removeClass('remove-display');

        // $(this).next('.ul-level-3').css('display','block');
        $(this).next('.ul-level-3').toggleClass('remove-display');

    });
    $('.scroll_title').click(function() {
        $('.icon-link-dropdown').css('color', 'white');
        // $(this).children('.icon-link-dropdown').css('color','#38c786');

    });


}
// --------------------------------------------------------------------2.MENU 







// responsive


// show sidebar (BOX-SIDEBAR-RESPONSIVE)
function show_basic_sidebar() {

    $('.button-change-sidebar').click(function() {
        // ẩn box search để chỉ 1 box dc hiển thị
        $('.box-search-menu-bar').removeClass('show-form-search');

        // ẩn box informartion
        $('.box-information').removeClass('show');
        $('.box-sidebar').toggleClass('show-sidebar-basic');



    });
    $('.button-change-sidebar-elastic').click(function() {
        // ẩn box search để chỉ 1 box dc hiển thị
        $('.box-search-menu-bar').removeClass('show-form-search');

        // ẩn box informartion
        $('.box-information').removeClass('show');
        // hiển thị box sidebar elastic
        $('.box-sidebar').toggleClass('show-sidebar-elastic');
        $('.button-change-sidebar').toggleClass('padding-left');



    });

    // $('body,html').click(function() {
    //     $('.box-sidebar').removeClass('show-sidebar-elastic');
    // });

}


// show form search (BOX-SEARCHER-RESPONSIVE)
function show_form_search() {

    $('.icon-show-box-search').click(function() {

        $('.box-search-menu-bar').toggleClass('show-form-search');
        // ẩn box sidebar để chỉ 1 box dc hiển thị
        $('.box-sidebar').removeClass('show-sidebar-basic');
        // ẩn box informartion
        $('.box-information').removeClass('show');



    });

}

// show box-avatar (INFOMARTION-RESPONSIVE)
function show_box_information() {

    $('#box_information').click(function() {

        $('.box-information').toggleClass('show');
        // ẩn box sidebar để chỉ 1 box dc hiển thị
        $('.box-sidebar').removeClass('show-sidebar-basic');
        // ẩn box search để chỉ 1 box dc hiển thị
        $('.box-search-menu-bar').removeClass('show-form-search');

        $('.box-sidebar').removeClass('show');



    });

}

// -----------------------------------------------------------------------------HORIZONTAL THEME


// xử lý fix layout sidebar scroll box theme horizontal (mặc định là theme basic) khi chuyển từ màn hình lớn sang màn hình nhỏ
// function sidebar_horizontal_responsive() {



//     $(window).resize(function() {
//         var size_width = $(window).width();
//         if (size_width < 992) {
//             // thu gọn tất cả dropdown
//             $('.scroll_content').removeClass('fix_layout');


//         } else {
//             // thay đổi lại về class title mặc định
//             $('.scroll_content').addClass('fix_layout');
//         }
//     });





// }

function show_sidebar_horizontal_responsive() {
    $('.button-change-sidebar').click(function() {
        $('.box-sidebar').toggleClass('show');

    });
}