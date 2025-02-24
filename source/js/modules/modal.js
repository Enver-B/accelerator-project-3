const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.about__promo-link');
const closeModalButton = document.querySelector('.modal__button-close');

const modalOverlay = document.querySelector('.modal__overlay');
const body = document.querySelector('.page-body');

openModalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal--open');
  modalOverlay.classList.add('modal__overlay--active');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--open');
  }
});

modalOverlay.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  modalOverlay.classList.remove('modal__overlay--active');
  body.style.overflow = '';
});
