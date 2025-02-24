import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const newsSlider = new Swiper('.news__slider-wrap', {
  modules: [Navigation, Pagination, Grid],
  loop: false,
  speed: 500,
  updateOnWindowResize: true,
  navigation: {
    nextEl: '.news__next-button',
    prevEl: '.news__prev-button',
  },
  pagination: {
    el: '.news__slider-pagination',
    bulletClass: 'news__slider-pagination-bullet',
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'news__slider-pagination-bullet--active',
    renderBullet: function (index, className) {
      return `<button class="news__slider-pagination-bullet news__slider-pagination-bullet--active ${className}" type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
    },
  },
  slideClass: 'news__slider-item',
  wrapperClass: 'news__slider-list',
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 3,
      grid: false,
      allowTouchMove: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      allowTouchMove: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      grid: {
        rows: 2,
        fill: 'column',
      }
    },
  },
});

const setSlidesPagination = () => {
  let slidesPerViewCount;
  let startPaginationIndex;
  let endPaginationIndex;
  let activeIndex;

  if (window.innerWidth < 768) {
    slidesPerViewCount = 2;
    activeIndex = newsSlider.activeIndex;
  }

  if(window.innerWidth >= 768 && window.innerWidth < 1440) {
    slidesPerViewCount = 4;
    activeIndex = Math.ceil(newsSlider.activeIndex / 2);
  }

  if(window.innerWidth >= 1440) {
    slidesPerViewCount = 3;
    activeIndex = Math.ceil(newsSlider.activeIndex / 3);
  }

  const lastSlideIndex = Math.ceil(newsSlider.slides.length / slidesPerViewCount);
  const paginationBullets = newsSlider.pagination.bullets;

  if (activeIndex < 3) {
    startPaginationIndex = 0;
    endPaginationIndex = 3;
  } else if (activeIndex >= lastSlideIndex - 1) {
    startPaginationIndex = lastSlideIndex - 4;
    endPaginationIndex = lastSlideIndex - 1;
  } else {
    startPaginationIndex = activeIndex - 2;
    endPaginationIndex = activeIndex + 2;
  }

  paginationBullets.forEach((bullet, index) => {
    if (index < startPaginationIndex || index > endPaginationIndex) {
      bullet.classList.add('news__slider-pagination-bullet--hidden');
    } else {
      bullet.classList.remove('news__slider-pagination-bullet--hidden');
    }
  });
};

newsSlider.on('slideChange', setSlidesPagination);
newsSlider.on('resize', setSlidesPagination);

newsSlider.init();

function debounce(callback, timeoutDelay = 300) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const debouncedResizeNewsSlider = debounce(() => {
  newsSlider.init();
}, 2);

window.addEventListener('load', debouncedResizeNewsSlider);
window.addEventListener('resize', debouncedResizeNewsSlider);
window.addEventListener('resize', setSlidesPagination);
