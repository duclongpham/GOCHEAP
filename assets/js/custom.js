$(document).ready(function () {
    $('#slide2').slick({
        dots: true,
        arrows: false,
        customPaging: function (slider, i) {
            console.log(slider);
            console.log(i);
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
    $('.header').find('.menu').on('click', function () {
        nav_list.addClass('nav-list-show');
    });
    $('.header').find('.background, .close').on('click', function () {
        nav_list.removeClass('nav-list-show');
    })
})