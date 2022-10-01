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
};

export default sliders;