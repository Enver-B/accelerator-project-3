const buttonMenu = document.querySelector('.header__button-menu');
const iconToggle = document.querySelector('.header__icon-toggle');

const mobileNavs = document.querySelector('.main-nav');
const programsSubmenuButton = document.querySelector('.programs-submenu__button');
const programsSubmenuIcon = document.querySelector('.programs-submenu__icon');
const programsSubMenu = document.querySelector('.programs-submenu__wrap');

const newsSubMenu = document.querySelector('.news-submenu__wrap');
const newsSubmenuButton = document.querySelector('.news-submenu');
const newsSubmenuIcon = document.querySelector('.news-submenu__icon');

const navLinks = document.querySelectorAll('.main-nav__link');

const mainOverlay = document.querySelector('.main__overlay');
const body = document.querySelector('.page-body');

const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const submenuButtons = [programsSubmenuButton, newsSubmenuButton];
const submenuWraps = [programsSubMenu, newsSubMenu];


navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

mainOverlay.addEventListener('click', () => {
  closeMobileNav();
});

function closeMobileNav() {
  mobileNavs.classList.add('main-nav--closed');
  mobileNavs.classList.remove('main-nav--opened');
  mainOverlay.classList.remove('main__overlay--active');
  body.style.overflow = '';
  buttonMenu.classList.add('header__button-menu--closed');
  buttonMenu.classList.remove('header__button-menu--opened');
  iconToggle.classList.add('header__icon-toggle--closed');
  iconToggle.classList.remove('header__icon-toggle--opened');
  closeSubmenus();
}

function closeSubmenus() {
  if (programsSubMenu.classList.contains('programs-submenu__wrap--opened')) {
    programsSubMenu.classList.remove('programs-submenu__wrap--opened');
    programsSubmenuButton.classList.remove('programs-submenu__button--opened');
    programsSubmenuButton.classList.add('programs-submenu__button--closed');
    programsSubmenuIcon.classList.remove('programs-submenu__icon--opened');
    programsSubmenuIcon.classList.add('programs-submenu__icon--closed');
  }

  if (newsSubMenu.classList.contains('news-submenu__wrap--opened')) {
    newsSubMenu.classList.remove('news-submenu__wrap--opened');
    newsSubmenuButton.classList.remove('news-submenu__button--opened');
    newsSubmenuButton.classList.add('news-submenu__button--closed');
    newsSubmenuIcon.classList.remove('news-submenu__icon--opened');
    newsSubmenuIcon.classList.add('news-submenu__icon--closed');
  }
}

buttonMenu.addEventListener('click', () => {
  if(mobileNavs.classList.contains('main-nav--closed')) {
    mobileNavs.classList.remove('main-nav--closed');
    mobileNavs.classList.add('main-nav--opened');

  } else {
    mobileNavs.classList.add('main-nav--closed');
    mobileNavs.classList.remove('main-nav--opened');

    closeSubmenus();
  }

  if(buttonMenu.classList.contains('header__button-menu--closed')) {
    buttonMenu.classList.remove('header__button-menu--closed');
    buttonMenu.classList.add('header__button-menu--opened');
    iconToggle.classList.remove(
      'header__icon-toggle--closed');
    iconToggle.classList.add('header__icon-toggle--opened');
    mainOverlay.classList.add('main__overlay--active');
  } else {
    buttonMenu.classList.add('header__button-menu--closed');
    buttonMenu.classList.remove('header__button-menu--opened');
    iconToggle.classList.add(
      'header__icon-toggle--closed');
    iconToggle.classList.remove('header__icon-toggle--opened');
    mainOverlay.classList.remove('main__overlay--active');
  }
});

programsSubmenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  programsSubMenu.classList.toggle('programs-submenu__wrap--opened');
  if(programsSubmenuButton.classList.contains('programs-submenu__button--closed')) {
    programsSubmenuButton.classList.remove('programs-submenu__button--closed');
    programsSubmenuButton.classList.add('programs-submenu__button--opened');
    programsSubmenuIcon.classList.remove('programs-submenu__icon--closed');
    programsSubmenuIcon.classList.add('programs-submenu__icon--opened');
  } else {
    programsSubmenuButton.classList.remove('programs-submenu__button--opened');
    programsSubmenuButton.classList.add('programs-submenu__button--closed');
    programsSubmenuIcon.classList.remove('programs-submenu__icon--opened');
    programsSubmenuIcon.classList.add('programs-submenu__icon--closed');
  }
});

newsSubmenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  newsSubMenu.classList.toggle('news-submenu__wrap--opened');
  if(newsSubmenuButton.classList.contains('news-submenu__button--closed')) {
    newsSubmenuButton.classList.remove('news-submenu__button--closed');
    newsSubmenuButton.classList.add('news-submenu__button--opened');
    newsSubmenuIcon.classList.remove('news-submenu__icon--closed');
    newsSubmenuIcon.classList.add('news-submenu__icon--opened');
  } else {
    newsSubmenuButton.classList.remove('news-submenu__button--opened');
    newsSubmenuButton.classList.add('news-submenu__button--closed');
    newsSubmenuIcon.classList.remove('news-submenu__icon--opened');
    newsSubmenuIcon.classList.add('news-submenu__icon--closed');
  }
});

submenuButtons.forEach((button, index) => {
  button.addEventListener('keydown', (e) => {
    if (isEnterKey(e)) {
      e.preventDefault();
      toggleSubmenu(button, submenuWraps[index]);
    }
  });
});

function toggleSubmenu(button, submenu) {
  submenu.classList.toggle('programs-submenu__wrap--opened');
  if (button.classList.contains('programs-submenu__button--closed')) {
    button.classList.remove('programs-submenu__button--closed');
    button.classList.add('programs-submenu__button--opened');
    programsSubmenuIcon.classList.remove('programs-submenu__icon--closed');
    programsSubmenuIcon.classList.add('programs-submenu__icon--opened');
  } else {
    button.classList.remove('programs-submenu__button--opened');
    button.classList.add('programs-submenu__button--closed');
    programsSubmenuIcon.classList.remove('programs-submenu__icon--opened');
    programsSubmenuIcon.classList.add('programs-submenu__icon--closed');
  }
}

buttonMenu.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    closeMobileNav();
  }
});
