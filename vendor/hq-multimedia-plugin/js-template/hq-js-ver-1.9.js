//01.--------------------------------------------- Menu transform and back to top

function MenuOnOff() {
    $('.status-box').addClass('opacity-50');
    $('.status-box:nth(0)').removeClass('opacity-50');
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 15) {
            $('.menu-scroll-on-off').addClass('hidden-right');
            $('.button-menu-hidden-right').addClass('show-button');

        } else {
            // code else

        }

        // code khi click vào show button menu
        $('.button-on-menu').on('click', function(event) {
            event.preventDefault();
            // paste code
            // $('.menu-scroll-on-off').toggleClass('hidden-right');
            $('.menu-scroll-on-off').removeClass('hidden-right');
            $('.button-menu-hidden-right').removeClass('show-button');
        });
        // code khi click show box scroll
        $('.status-box').on('click', function(event) {
            event.preventDefault();
            // paste code
            $('.status-box').addClass('opacity-50');
            $(this).removeClass('opacity-50');
            // $('.button-menu-hidden-right').removeClass('show-button');
        });

    });

}

function MenuTransform() {
    $(window).scroll(function() {
        if ($('body,html').scrollTop() > 50) {
            $('.color-background-menu').addClass('background-menu-change');
            $('.box-right-menu-center a').addClass('color-link');
            // $('.boxMenuSystem ul li a').addClass('color_change');
            $('.backtotop,.back-to').addClass('icon_back_top_show');
        } else {
            $('.color-background-menu').removeClass('background-menu-change');
            $('.box-right-menu-center a').removeClass('color-link');
            $('.backtotop,.back-to').removeClass('icon_back_top_show');
        }
    });
    // back to top

    $('.backtotop').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
}


//02.-------------------------------------------- modal box

function modal_box() {
    $(' .button_modal_box').click(function() {
        $('.modal_box').addClass('select');
        $('.backgroud_modal_box').addClass('select');
        // 
        $('.box-setting-code').removeClass('none');

    });
    $('.btn-close,.backgroud_modal_box').click(function() {
        $('.modal_box').removeClass('select');
        $('.backgroud_modal_box').removeClass('select');
        // 
        $('.box-setting-code').addClass('none');

    });
}

// 03.----------------------------Mansory-edit


function mansory_edit() {
    $('.content_mansory').isotope({
        itemSelector: '.box_mansory'
    });
}
//---------------------------------------------------- fancyBox
// No_effect
function FancyBox_No_effect() {
    $('.FancyBox_preview a').fancybox();
}


// phần tham khảo thêm trên google
// Effect
function FancyBox_Effect() {
    $('.FancyBox_preview a').fancybox({ openEffect: 'elastic' });
}


// 04.----------------------------box scroll
//------------------------------------------------------------------------ ScrollBox
function scrollBox_one_items() {
    $('.scroll_content').slideUp();


    $('.scroll_title').click(function() {
        $('.scroll_content').slideToggle(1000);
        $('.code-box').slideToggle(1000);
        // cuộn nội dung lên đầu
        // $('body,html').animate({ scrollTop: $('.scroll_content').offset().top })
        // $('body,html').animate({ scrollTop: 500 }, 1000);
    });
}


function scrollBox() {
    $('.scroll_content').slideUp();

    $('.scroll_title').click(function() {

        $(this).next('.scroll_content').slideToggle(500);

        $(this).toggleClass('hoverColor');
        // cuộn nội dung lên đầu
        // $('body,html').animate({ scrollTop: $(this).offset().top })
        // $('body,html').animate({ scrollTop: 0 }, 1000);
    });
}
// cập nhật 25-8-2023
function scrollBox_active() {
    $('.scroll_content').slideUp(0);
    // khi muốn box scroll đầu tiên active
    $('.scroll_content:nth(0)').slideDown(0);
    $('.scroll_title:nth(0)').addClass('hoverColor');

    $('.scroll_title').click(function() {
        // ĐÓNG TẤT CẢ BOX
        $('.scroll_content').slideUp(0);
        // REMOTE CLASS ACTIVE
        $('.scroll_title').removeClass('hoverColor');
        // CHÍNH NÓ ADD CLASS ACTIVE
        $(this).addClass('hoverColor');


        $(this).next('.scroll_content').slideToggle();


        // $(this).toggleClass('hoverColor');
    });
}


//05.---------------------------------------------------- LoadMore



function LoadMore() {
    TweenMax.staggerFrom($('.original-content .items-initial'), 1, { top: 100, opacity: 0 }, 0.5)

    // những nội dung nằm trong class NDthem sẽ ẩn
    $('.more-content').slideUp(0);

    // khi click vào button class load những nội dung nằm trong class NDthem sẽ hiện
    $('.load_more').click(function() {
        $('.more-content').slideDown(0);
        TweenMax.staggerFrom($('.more-content .items-more'), 1, { top: 100, opacity: 0 }, 0.5)
        $('.load_more').addClass('hidden');
    });
}

// 06.----------------------------------------------------filter
function Filter() {

    $('.content_filter .ul_test ').isotope({
        itemSelector: '.items_filter'
    });

    $('nav ul li a').click(function(event) {
        $('nav ul li a').removeClass('color-60');
        $(this).addClass('color-60');
        /* Act on the event */
        var danhmuc = $(this).data('danhmucanh');
        var ten = $(this).text();
        if (danhmuc == 'all') {

            $('section .title_filter').text("Tất cả ảnh");
            $('.content_filter .ul_test').isotope({ filter: '*' });
        } else {
            $('section .title_filter').text(ten);
            $('.content_filter .ul_test').isotope({ filter: danhmuc });
        }
        return false;
    });
}
// 06.----------------------------------------------------filter box search
function search_filter() {

    $('.content_filter .ul_test').isotope({
        itemSelector: '.items_filter'
    });

    $('.tukhoa').keypress(function(event) {
        if (event.keyCode == 13) {
            tu1 = $('.tukhoa').val();
            tu1 = "." + tu1;
            $('.content_filter ul').isotope({ filter: tu1 });
        }
    })

    // code tim kiem tu dong
    thoigian = setInterval(function() {
        tu1 = $('.tukhoa').val();
        tu1 = "." + tu1;
        $('.content_filter .ul_test').isotope({ filter: tu1 });
    }, 200);
}

// 07.-------------------------------------------------------------------Wow

function Wow_js() {
    new WOW().init();
}

// 08.-------------------------------------------------------------------OWL slide 


function slideOWL() {
    $("#owl-demo").owlCarousel({
        // AutoPlay

        autoPlay: 5000, //Set AutoPlay to 5 seconds

        // Responsive

        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],



    });
}


//09.--------------------------------------------------------------- hide show box


function hideShow_box() {
    $('.box_hidden').animate({ opacity: 0, marginLeft: -900 }, 0);
    $('.btn_hidden_to_active').click(function(event) {
        $('.box_hidden').animate({ opacity: 1, marginLeft: 0 }, 500);
        $('.box_active').animate({ opacity: 0, marginLeft: -900 }, 0);
    });

    $('.btn_active_to_hidden').click(function(event) {
        $('.box_active').animate({ opacity: 1, marginLeft: 0 }, 500);
        $('.box_hidden').animate({ opacity: 0, marginLeft: -900 }, 0);
    });


}

//10.---------------------------------------------------------------Tabs img
// function tab_box() {
//     $('.items-thumb').click(function() {
//         x = $(this).index();
//         console.log(x);
//         x = x + 1;
//         $('.img_large').removeClass('active');
//         $('.img_large:nth-child(' + x + ')').addClass('active');
//     });
// }


function tab_box_img() {
    $('.items_content_img:nth-child(3)').addClass('active');
    $('.img-items-thumb:nth-child(3)').addClass('active');
    $('.img-items-thumb').click(function() {
        $('.img-items-thumb').removeClass('active');
        $(this).addClass('active');
        x = $(this).index();
        x = x + 1;
        $('.items_content_img').removeClass('active animate-opacity');
        $('.items_content_img:nth-child(' + x + ')').addClass('active animate-opacity');
    });
}
//11.---------------------------------------------------------------Tabs content

function tab_box() {
    $('.items_content:nth-child(1)').addClass('active');
    $('.items_thumb:nth-child(1)').addClass('active');
    $('.items_thumb').click(function() {
        $('.items_thumb').removeClass('active');
        $(this).addClass('active');
        x = $(this).index();
        x = x + 1;
        $('.items_content').removeClass('active animate-opacity');
        $('.items_content:nth-child(' + x + ')').addClass('active animate-opacity');
    });
}
//12.---------------------------------------------------------------Scroll box

function SrcollAddClass() {
    $(document).ready(function() {

        var vitrimenu = $('.content_items_1').offset().top;
        var vitrimenu2 = $('.content_items_2').offset().top;



        $(window).scroll(function(event) {
            /* Act on the event */
            var vitribody = $('body,html').scrollTop();

            // content-1
            if (vitribody >= vitrimenu) {
                $('.bg-items').addClass('bg-scroll animate-left');
                $('.button-side-bar').addClass('active animate-top');
                //code cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(1) a').addClass('active');

                // $(this).addClass('active');
                $('.boxMenuSystem').removeClass('bg-scroll');
            } else {
                $('.bg-items').removeClass('bg-scroll animate-left');
                $('.button-side-bar').removeClass('active animate-top');

            }
            // content-2
            if (vitribody >= vitrimenu2) {
                $('.bg-items2').addClass('bg-scroll animate-left');
                $('.bg-items').removeClass('bg-scroll animate-left');
                // viết cho side bar
                $('.link_one_page').removeClass('active');
                $('ul.side_bar li:nth-child(2) a').addClass('active');

            } else {
                $('.bg-items2').removeClass('bg-scroll animate-left');
            }





        });



    });
}
//13.---------------------------------------------------------------Menu One Page


function OnePage() {
    $(document).ready(function() {
        // console.log($('.chapter1').offset().top);
        $('.sidenav ul li:nth-child(1) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });

        // click menu 2
        $('.sidenav ul li:nth-child(2) a').on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: $('.bg-items2').offset().top
            }, 1000);
            $('.link_one_page').removeClass('active');
            $(this).addClass('active');
        });








    });
}




// Update


// menuSmall
function small_menu() {
    $('.content_menu , .link').slideUp(0);

    $('.box-menu-small span,.content_menu span').click(function() {

        $(this).next('.content_menu,.link').slideToggle();

        $(this).toggleClass('bg-selector color-selector');
        $(this).toggleClass('demo ');
    });
}


// //---------------------------------------------------------------------- Onepage
// function OnePage() {
//     // console.log($('.chapter1').offset().top);
//     $('.menu_one_page ul li:nth-child(1) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page1').offset().top }, 1500, "easeOutElastic");
//         $('.menu_one_page ul li a').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.menu_one_page ul li:nth-child(2) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
//         $('.menu_one_page ul li a').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.menu_one_page ul li:nth-child(3) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
//         $('.menu_one_page ul li a').removeClass('active');
//         $(this).addClass('active');
//     });

// }
//---------------------------------------------------------------------- Onepage
// function OnePage_pin() {
//     // console.log($('.chapter1').offset().top);
//     $('.menu-pin ul li:nth-child(1) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page1').offset().top }, 1500, "easeOutElastic");
//         $('.menu-pin ul li a').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.menu-pin ul li:nth-child(2) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page2').offset().top }, 1500, "easeOutElastic");
//         $('.menu-pin ul li a').removeClass('active');
//         $(this).addClass('active');
//     });
//     $('.menu-pin ul li:nth-child(3) a').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: $('.content-page3').offset().top }, 1500, "easeOutElastic");
//         $('.menu-pin ul li a').removeClass('active');
//         $(this).addClass('active');
//     });

// }
//------------------------------------------------------------------- Back to top
// function BackToTop() {
//     $('.backtotop').on('click', function(event) {
//         event.preventDefault();
//         $('body,html').animate({ scrollTop: 0 }, 1000);
//     });
// }

// --------------------------------------------------------------Pin top menu
// function pinTopMenu() {
//     var vitrimenu = $('.menu-pin').offset().top;

//     $(window).scroll(function(event) {
//         /* Act on the event */
//         var vitribody = $('body,html').scrollTop();
//         // console.log(vitribody);
//         // console.log(vitrimenu);


//         if (vitribody >= vitrimenu) {
//             $('.menu-pin').addClass('in_top');

//         } else {
//             $('.menu-pin').removeClass('in_top');
//         }
//     });
// }





//---------------------------------------------------------- Mansory layout
// function mansory() {

//     $hieuung = $('.content_mansory').isotope({
//         // options

//         layoutMode: 'masonry'
//     });
//     $hieuung.imagesLoaded().progress(function() {
//         $hieuung.isotope('layout');
//     });

// }










//------------------------------------------------------------------ TweenMax

//  TweenMax.to (tenphantu ,thoigian, {ten thuoc tinh:gia tri,..});
// .from : là từ vị trí đó trở về vị trí mặc định
// .to : là từ vị trí mặc định tới vị trí đã đặt
// .fromTo: Từ vị trí A đến vị trí B
// .staggerTo: là chuyển động đi với những phần tử giống nhau
// .staggerFrom: ngược lại với stagerTo

// phần tử đồng nhất

function staggerFrom_func() {
    TweenMax.staggerFrom($('.btn-primary'), 1, { x: 200, opacity: 0, ease: Bounce.easeOut }, 0.5);
}

function staggerTo_func() {
    TweenMax.staggerTo($('.btn-primary'), 1, { x: 200, opacity: 0 }, 0.5);
}

// phần tử đơn lẻ

function TweenMaxTo() {
    TweenMax.to($('.menu_one_page '), 1, { y: 200, opacity: 0, scale: 0 });
}

function TweenMaxFrom() {
    TweenMax.from($('.nut1 '), 1, { x: 200, opacity: 0 });
}

function TweenMaxFromTo() {
    TweenMax.fromTo($('.nut1 '), 1, { x: 200, }, { x: -200 });
}
// kết hợp với hàm click
$('.nut3').click(function(event) {
    TweenMax.fromTo($('.nut4 '), 1, { x: 200, }, { x: -200 });
    TweenMax.to($(this), 1, { x: "+=200", });
});







//-------------------------------------------------- ngày cập nhật 10-8-2023

// mySide
function openSide() {
    document.getElementById("Side").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeSide() {
    document.getElementById("Side").style.width = "0";
}
// sideActive
/* Open the sidenav */

function SideActive() {
    $('.SideActive').toggleClass('translateX');
    $('.main-sidebar').toggleClass('set-main');
    $('.main-sidebar-2').toggleClass('set-main-2');
}

function openSideActive() {
    document.getElementById("SideActive").style.transform = "translateX(0px)";
    $('.main-sidebar').addClass('set-main');
    $('.main-sidebar-2').addClass('set-main-2');




}

/* Close/hide the sidenav */
function closeSideActive() {
    document.getElementById("SideActive").style.transform = "translateX(-250px)";
    $('.main-sidebar').removeClass('set-main');
    $('.main-sidebar-2').removeClass('set-main-2');
    // $('#SideActive').click(function(event) {
    //     $('.main-sidebar').removeClass('set-main');
    //     $('.main-sidebar-2').removeClass('set-main-2');

    // });

}

// SidePushOpacity
function openSidePushOpacity() {
    document.getElementById("SidePushOpacity").style.width = "250px";

    $('.main-sidebar').addClass('set-main');
    $('.main-sidebar-2').addClass('set-main-2');
    document.body.style.backgroundColor = "#1111116c";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeSidePushOpacity() {
    document.getElementById("SidePushOpacity").style.width = "0";
    $('#SidePushOpacity').click(function(event) {
        $('.main-sidebar').removeClass('set-main');
        $('.main-sidebar-2').removeClass('set-main-2');

    });
    document.body.style.backgroundColor = "white";

}

// SidePush
function openSidePush() {
    document.getElementById("SidePush").style.width = "250px";
    $('.main-sidebar').addClass('set-main');
    $('.main-sidebar-2').addClass('set-main-2');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeSidePush() {
    document.getElementById("SidePush").style.width = "0";
    $('#SidePush').click(function(event) {
        $('.main-sidebar').removeClass('set-main');
        $('.main-sidebar-2').removeClass('set-main-2');

    });

}



/*SideFull */
function openSideFull() {
    document.getElementById("SideFull").style.width = "100%";

}

/* Close/hide the sidenav */
function closeSideFull() {
    document.getElementById("SideFull").style.width = "0";

}

function openSideFull2() {
    document.getElementById("SideFull2").style.width = "100%";

}

/* Close/hide the sidenav */
function closeSideFull2() {
    document.getElementById("SideFull2").style.width = "0";

}
// 17-9-2023


function hiddenAlert() {
    var header = $('.box-alert');

    setTimeout(function() {
        header.addClass('hidden-alert');
    }, 2700);
}

function close_alert() {
    document.getElementById("box-alert");
    $('.box-alert').addClass('hidden-alert');

}

// //alert_success
// function close_alert_success() {
//     document.getElementById("alert_success").style.transform = "translateX(-500px)";
//     document.getElementById("alert_success").style.visibility = "hidden";
//     document.getElementById("alert_success").style.opacity = "0";
//     document.getElementById("alert_success").style.transition = "2s";


// }


// // alert_err
// function close_alert_err() {
//     document.getElementById("alert_err").style.visibility = "hidden";
//     document.getElementById("alert_err").style.opacity = "0";
//     document.getElementById("alert_err").style.transition = "1s";

// }
// // alert_warning
// function close_alert_warning() {
//     document.getElementById("alert_warning").style.visibility = "hidden";
//     document.getElementById("alert_warning").style.opacity = "0";
//     document.getElementById("alert_warning").style.transition = "1s";

// }
// // alert_notification
// function close_alert_notification() {
//     document.getElementById("alert_notification").style.visibility = "hidden";
//     document.getElementById("alert_notification").style.opacity = "0";
//     document.getElementById("alert_notification").style.transition = "1s";

// }


// function close_alert() {
//     document.getElementById("alert").style.visibility = "hidden";
//     document.getElementById("alert").style.opacity = "0";
//     document.getElementById("alert").style.transition = "1s";

// }




// viết cho project HQ Multimedia