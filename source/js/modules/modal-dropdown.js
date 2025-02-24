const dropdownList = function () {
  const dropdownInput = document.querySelectorAll('.dropdown__input');
  const dropdownItem = document.querySelectorAll('.dropdown__item');
  const dropdownIcon = document.querySelector('.dropdown__icon');

  dropdownInput.forEach((item) => {
    item.addEventListener('click', dropdownToggle);
  });

  dropdownItem.forEach((item) => {
    item.addEventListener('click', dropdownChoose);
  });

  function dropdownToggle() {
    this.parentElement.classList.toggle('dropdown--active');

    if(dropdownIcon.classList.contains('dropdown__icon--closed')) {
      dropdownIcon.classList.remove('dropdown__icon--closed');
      dropdownIcon.classList.add('dropdown__icon--opened');
    } else {
      dropdownIcon.classList.remove('dropdown__icon--opened');
      dropdownIcon.classList.add('dropdown__icon--closed');
    }
  }

  function dropdownChoose() {
    const text = this.innerText,
      dropdown = this.closest('.dropdown');
    const inputField = dropdown.querySelector('.dropdown__input');
    inputField.value = text;
    dropdown.classList.remove('dropdown--active');

    dropdown.classList.remove('dropdown--error');
    inputField.setCustomValidity('');
  }

};

dropdownList();
