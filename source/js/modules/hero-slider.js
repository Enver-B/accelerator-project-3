import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlider = new Swiper('.hero-slider__container', {
  direction: 'horizontal',
  modules: [Pagination, EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  speed: 500,
  allowTouchMove: true,
  touchMove: true,
  pagination: {
    el: '.hero-slider__slider-pagination',
    type: 'bullets',
    bulletClass: 'hero-slider__slider-pagination-bullet',
    bulletActiveClass: 'hero-slider__slider-pagination-bullet--selected',
    clickable: true,
  },
  breakpoints: {
    320: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: true,
    },
    768: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: true,
    },
    1440: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    },
  },
});


function updatePaginationPosition() {
  const currentSlide = heroSlider.slides[heroSlider.activeIndex];
  const content = currentSlide.querySelector('.hero-slider__content');
  const pagination = document.querySelector('.hero-slider__slider-pagination');

  if (content) {
    const contentHeight = content.offsetHeight;
    const computedStyleContent = getComputedStyle(content);

    const contentBottom = parseFloat(computedStyleContent.bottom);
    const contentLeft = parseFloat(computedStyleContent.left);

    if (pagination) {
      pagination.style.bottom = `${contentHeight + contentBottom}px`;
      pagination.style.left = `${contentLeft}px`;
    }
  }
}

heroSlider.on('slideChange', () => {
  updatePaginationPosition();
});

document.addEventListener('DOMContentLoaded', () => {
  updatePaginationPosition();
});
