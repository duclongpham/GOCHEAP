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
    var header = $('.header');
    var icon_show = header.find('.menu .show');
    var icon_close = header.find('.menu .close');
    $('.header').find('.menu, .nav-list a').on('click', function () {
        if(!nav_list.hasClass('nav-list-show')) {
            nav_list.addClass('nav-list-show');
            icon_show.css({'display': "none"})
            icon_close.css({'display': "inline-block"})
            
        } else {
            setTimeout(function(){
                nav_list.removeClass('nav-list-show');
                icon_show.css({'display': "inline-block"})
                icon_close.css({'display': "none"})
            },100);
        }
    });

    // $('.header').find('.background, .close, .nav-list a').on('click', function () {

    // })
})