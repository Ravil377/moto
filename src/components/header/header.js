import Swiper, { Autoplay, Scrollbar, Navigation, EffectFade, Thumbs } from "swiper";
Swiper.use([Autoplay, Scrollbar, Navigation, EffectFade, Thumbs]);

const slider = document.querySelector('.slider-js');
const slider2 = document.querySelector('.background-js');


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

if (slider2) {  
  var Slider2 = new Swiper(slider2, {
      slidesPerView: 1,
      spaceBetween: 20,
      effect: 'fade',
      autoplay: {
        delay: 5000,
      },
  });
}

