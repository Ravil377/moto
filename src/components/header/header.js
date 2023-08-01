import Swiper, { Autoplay, Scrollbar, Navigation, EffectFade, Thumbs } from "swiper";
Swiper.use([Autoplay, Scrollbar, Navigation, EffectFade, Thumbs]);

const slider = document.querySelector('.slider-js');

if (slider) {  
    var Slider = new Swiper(slider, {
        slidesPerView: 2,
        spaceBetween: 20,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 60
          },
        },
    });
}

