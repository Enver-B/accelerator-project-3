const formDropdownList = function () {
  const dropdownInput = document.querySelectorAll('.dropdown-form__input');
  const dropdownItem = document.querySelectorAll('.dropdown-form__item');
  const dropdownIcon = document.querySelector('.dropdown-form__icon');

  dropdownInput.forEach((item) => {
    item.addEventListener('click', dropdownToggle);
  });

  dropdownItem.forEach((item) => {
    item.addEventListener('click', dropdownChoose);
  });

  function dropdownToggle() {
    this.parentElement.classList.toggle('dropdown-form--active');

    if(dropdownIcon.classList.contains('dropdown-form__icon--closed')) {
      dropdownIcon.classList.remove('dropdown-form__icon--closed');
      dropdownIcon.classList.add('dropdown-form__icon--opened');
    } else {
      dropdownIcon.classList.remove('dropdown-form__icon--opened');
      dropdownIcon.classList.add('dropdown-form__icon--closed');
    }
  }

  function dropdownChoose() {
    const text = this.innerText,
      dropdown = this.closest('.dropdown-form');
    const inputField = dropdown.querySelector('.dropdown-form__input');
    inputField.value = text;
    dropdown.classList.remove('dropdown-form--active');

    dropdown.classList.remove('dropdown-form--error');
    inputField.setCustomValidity('');
  }

};

formDropdownList();
