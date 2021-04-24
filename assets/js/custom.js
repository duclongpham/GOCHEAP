$(document).ready(function () {
    $('#slide2').slick({
        dots: true,
        arrows: false,
        customPaging: function (slider, i) {
            return '<i class="far fa-circle icon-control"></i>';
        },
    });
    $('#slide1').slick({
        slidesToShow: 3,
        prevArrow: $('#slide1-prev'),
        nextArrow: $('#slide1-next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    var nav_list = $('.header .nav-list');
    $('.header').find('.menu, .nav-list a').on('click', function () {
        if(!nav_list.hasClass('nav-list-show')) {
            nav_list.addClass('nav-list-show');
        } 
    });

    $('.header').find('.background, .close, .nav-list a').on('click', function () {
        setTimeout(function(){
            nav_list.removeClass('nav-list-show');
        },100);
    })
})