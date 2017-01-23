$(document).ready(function() {


// фиксирование header при скролинге
$(window).scroll(function()
{
    if ($(this).scrollTop() > 20)
    {
        $('.header-bgr, header.header, header .logo-bgr, header .logo a, .header-info-left span, .header-info-right a, .wrap-language span, header .call').addClass('fixed');
        $(".header-info-left .email").hide(200);
        $(".wrap-search").hide(200);

    }

    if ($(this).scrollTop() < 20)
    {
        $('.header-bgr, header.header, header .logo-bgr, header .logo a, .header-info-left span, .header-info-right a, .wrap-language span, header .call').removeClass('fixed');
        $(".header-info-left .email").show(400);
        $(".wrap-search").show(400);
    }
});

var Carusels_header = [];
$('.carousel-head').each(function(index, elem)
{
    Carusels_header.push($(elem).owlCarousel(
    {
        items: 1,
        autoPlay: 6500,
        singleItem: true,
        navigation: true,
        navigationText: false,
        //transitionStyle: "fade",
        slideSpeed: 1000,
        addClassActive: true
    }));
});

var Carusels_reviews = [];
$('.carousel-reviews').each(function(index, elem)
{
    Carusels_reviews.push($(elem).owlCarousel(
    {
        items: 2,
        autoPlay: 6500,
        navigation: true,
        navigationText: false,
        //transitionStyle: "fade",
        addClassActive: true,
        slideSpeed: 1000
    }));
});

// подключение выбора города в подвале
$("ul.tabs").jTabs(
{
    content: ".tabs_content",
    animate: true,
    effect: "fade"
});

// показ выпадающего списка городов
$('.city-name, .open-select-city').on('click', function()
{
    $(this).siblings("#tabs-city").show(300);
    return false;
});

// подставка в поле ввода выбраного варианта из списка формы заказа брифа по клику на него
$('#tabs-city li').on('click', function() {
    var input_value = $(this).text();
    $('.city-name').text(input_value);
    $("#tabs-city").hide(300);
});

// скрытие списка формы заказа брифа при клике вне его области
$(document).on('click', function(event) {
    if( $(event.target).closest("#tabs-city").length )
    return;
    $("#tabs-city").hide(300);
    event.stopPropagation();
});



});