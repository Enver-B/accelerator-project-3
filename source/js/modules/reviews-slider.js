import Swiper from 'swiper';
import {Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

new Swiper('.reviews__slider-content', {
  direction: 'horizontal',
  modules: [Navigation, Scrollbar ],
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button',
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
        el: '.reviews__scrollbar',
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 2,
      allowTouchMove: false,
      spaceBetween: 32,
      scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
      },
    },
  },
});
