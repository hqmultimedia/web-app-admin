// function sidebar_horizontal_responsive() {



//     $(window).resize(function() {
//         var size_width = $(window).width();
//         if (size_width > 500) {
//             $('.button-change-sidebar').click(function() {
//                 $('.button-change-sidebar').removeClass('show');
//                 // $('.button-change-sidebar').css('color', '#FFFFFF');
//                 // $('.button-change-sidebar').css({
//                 //     paddingLeft: "0px"
//                 // });
//             });
//         } else {
//             $('.button-change-sidebar').click(function() {
//                 $('.button-change-sidebar').css('color', '#FFFFFF');
//                 $('.button-change-sidebar').css({
//                     paddingLeft: "0px"
//                 });
//             });
//         }
//     });




// }

// function change_layout_basic() {

//     $('#basic_layout').click(function() {

//         // I 
//         // TH A :đang ở layout horizontal

//         // Bước 1 : Add lại các class dành cho layout basic
//         $('.scroll_title_horizontal').addClass('scroll_title');
//         $('.scroll_content_horizontal').addClass('scroll_content');

//         // Bước 2 : remove các class theme horizontal
//         $('.scroll_title_horizontal').removeClass('scroll_title_horizontal');
//         $('.scroll_content_horizontal').removeClass('scroll_content_horizontal');

//         // TH B :đang ở layout elastic

//         // Bước 1 : Add lại các class dành cho layout basic
//         $('.scroll_title_elastic').addClass('scroll_title');
//         $('.scroll_content_elastic').addClass('scroll_content');


//         // Bước 2 : remove các class theme elastic 
//         $('.scroll_title_elastic').removeClass('scroll_title_elastic');
//         $('.scroll_content_elastic').removeClass('scroll_content_elastic');

//         // II/ về lại layout basic

//         // Bước 1 : Đóng tất cả dropdown khi chuyển từ layout horizontal sang layout basic trong trường hợp click vào menu
//         $('.scroll_content').slideUp(0);

//         // Bước 2 : remove class select khi chuyển từ layout horizontal sang layout basic trong trường hợp click vào menu
//         $('.scroll_title').removeClass('hoverColor selected');



//     });

// }

// change layout elastic


// function change_layout_elastic() {

//     $('#basic_elastic_layout').click(function() {

//         // TH A :đang ở layout basic

//         // Bước 1 : Add các class dành cho layout elastic
//         $('.scroll_title').addClass('scroll_title_elastic');
//         $('.scroll_content').addClass('scroll_content_elastic');

//         // Bước 2 : remove class của theme basic

//         $('.scroll_title').removeClass('scroll_title');
//         $('.scroll_content').removeClass('scroll_content');

//         // Bước 3 : thả dropdown xuống trước khi chuyển sang layout horizontal (mặc định dropdown bị thu gọn)
//         $('.scroll_content_elastic').slideDown(0);

//         // TH A :đang ở layout horizontal
//         // Bước 1 : Add các class dành cho layout elastic
//         $('.scroll_title_horizontal').addClass('scroll_title_elastic');
//         $('.scroll_content_horizontal').addClass('scroll_content_elastic');

//         // Bước 2 : remove class của theme basic

//         $('.scroll_title_horizontal').removeClass('scroll_title_horizontal');
//         $('.scroll_content_horizontal').removeClass('scroll_content_horizontal');


//     });

// }


// change layout horizontal

// function change_layout_horizontal() {

//     $('#horizontal_layout').click(function() {

//         // I 
//         // TH A :đang ở layout basic

//         // Bước 1 : Add các class dành cho layout horizontal
//         $('.scroll_title').addClass('scroll_title_horizontal');
//         $('.scroll_content').addClass('scroll_content_horizontal');

//         // Bước 2 : remove class của theme basic

//         $('.scroll_title').removeClass('scroll_title');
//         $('.scroll_content').removeClass('scroll_content');

//         // Bước 3 : thả dropdown xuống trước khi chuyển sang layout horizontal (mặc định dropdown bị thu gọn)
//         $('.scroll_content_horizontal').slideDown(0);

//         // TH B :đang ở layout elastic
//         // Bước 1 : Add các class dành cho layout horizontal
//         $('.scroll_title_elastic').addClass('scroll_title_horizontal');
//         $('.scroll_content_elastic').addClass('scroll_content_horizontal');
//         // Bước 2 : remove class của theme elastic

//         $('.scroll_title_elastic').removeClass('scroll_title_elastic');
//         $('.scroll_content_elastic').removeClass('scroll_content_elastic');

//     });

// }

// change layout basic