import $ from 'jquery';
import 'slick-carousel';

const sliders = () => {
    $('.hots__slider').slick({
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.season__slider').slick();

    $('.popular__slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.stats__slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.partners__slider').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 2500
                }
            }
        ]
    });

    $('.vacancy-one__slider').slick({
        slidesToShow: 1,
    });

    $('.about__slider').slick({
        slidesToShow: 1,
    });


};

export default sliders;