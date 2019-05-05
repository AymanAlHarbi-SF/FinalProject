$(document).ready(function(){
    $(document).on('click','toggle_menu', function(){
        $("#myNavbar.navbar-collapse.collapse").addClass('active');
    });
    $(document).on('click','.close_toggle_menu',function(){
         $("#myNavbar.navbar-collapse.collapse").removeClass('active');
    });
$(document).on('click','section3 .select_menu ul li', function(){
    var currentid = $(this).attr('data-id');
    $('.section3 .select_menu ul li, .items_selectmenu .items_menus').removeClass('active');
    $('.section3 .select_menu ul li[data-id="'+currentid+'"],.items_seclectmenu .items_menus[data-menu"'+currentid'"]').addClass('active');
});
$("#product_header_slide").lightSlider({
adaptiveHeight: true,
item: 1,
speed: 1000,
auto: true,
slideEnAnimation: true,
pause: 3000,
sliderMargin: 0,
addClass: '',
mode: "fade",
useCSS: true,
cssEasing: 'ease', // cubic-bezier(0.25, 0, 0.25, 1)
easing: 'linear'
});
$("#topproduct_slide").lightSlider({
    adaptiveHeight: true,
    item: 3,
    speed: 1000, //ms
    auto: true,
    loop: true,
    controls: false,
    slideEnAnimation: true,
    pause: 4000,
    sliderMargin:10,
    addClass:'',
    mode: "slide",
    useCSS: true,
    cssEasing: 'ease',
    easing: 'linear',
    pager: false,
    adaptiveHeight: true,
    responsive : [
        {
            breakpoint: 450,
            setting: {
                item:2}
        }

    ]
    
});