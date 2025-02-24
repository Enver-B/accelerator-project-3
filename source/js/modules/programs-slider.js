import Swiper from 'swiper';
import {Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

new Swiper('.programs__slider-content', {
  direction: 'horizontal',
  modules: [Navigation, Scrollbar ],
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.programs__next-button',
    prevEl: '.programs__prev-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      allowTouchMove: true,
      spaceBetween: 30,
      scrollbar: {
        el: '.programs__scrollbar',
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 3,
      allowTouchMove: false,
      spaceBetween: 32,
      scrollbar: {
        el: '.programs__scrollbar',
        draggable: true,
      },
    },
  }
});
