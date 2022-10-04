import $ from 'jquery';
import 'slick-carousel';

const sliders = () => {
    $('.hots__slider').slick({
        slidesToShow: 3,
        dots: true
    });

    $('.season__slider').slick();

    $('.popular__slider').slick({
        slidesToShow: 4
    });

    $('.reviews__slider').slick({
        slidesToShow: 4
    });

    $('.stats__slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.partners__slider').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 4000
    });
};

export default sliders;