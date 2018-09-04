new WOW().init();

$('.fix-menu-layout .item.icon').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('active');
    $(this).siblings('.child-menu').slideToggle();
})

$('.header .moblie-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('active');
})
$('.public-layout').on('click', function(e) {
    e.preventDefault();
    $('.header .moblie-toggle').trigger('click');
}).on('touchmove', function(e) {
    e.preventDefault();
})
$('.header .w100').on('touchmove', function(e) {
    e.preventDefault();
})

$('.child-menu-root>a').on('click', function(e) {
    if (window.innerWidth < 991) {
        e.preventDefault();
        $(this).parent('.item').siblings().find('.child-menu').hide();
        $(this).siblings('.child-menu').slideToggle();
    }
})
$('.header .menu').on('mouseleave', function() {
    if (window.innerWidth > 991) {
        $('.child-menu-root .child-menu').hide();
    }
})
$('.header .menu .child-menu-root').on('mouseenter', function() {
    if (window.innerWidth > 991) {
        $('.child-menu-root .child-menu').hide();
        $(this).children('.child-menu').slideDown();
    }
}).on('mouseleave', function() {

    if (window.innerWidth > 991) {
        $(this).children('.child-menu').hide();
    }
})



$('.public-component-query-container .slide-down .tabs-control .item').on('click', function(e) {
    e.preventDefault();
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.public-component-query-container .slide-down .tabs-content .item').eq(index).addClass('active').siblings().removeClass('active');
})
$('.public-component-query-container .slide-down .tabs-content .item .location span').on('click', function(e) {
    e.preventDefault();
    $('.public-component-query-container .search-box .text span').addClass('active');
    var i_index = $(this).parents('.item').index();
    $('.public-component-query-container .search-box .text span i').eq(i_index).text($(this).text());
    $(this).parents('.item').find('span').removeClass('active');
    $(this).addClass('active')

    switch (i_index) {
        case 0:
            {
                $('.public-component-query-container .slide-down .tabs-control .item').eq(i_index + 1).trigger('click');
                break;
            }
        case 1:
            {
                $('.public-component-query-container .slide-down .tabs-control .item').eq(i_index + 1).trigger('click');
                break;
            }
        case 2:
            {
                $('.public-component-query-container .slide-down').slideUp();
                break;
            }
        default:
            {
                break;
            }
    }
});


$('.public-component-query-container .search-box').on('click', function() {
    $(this).siblings().slideDown();
})