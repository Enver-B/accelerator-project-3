const modalForm = document.querySelector('.modal-form');
const inputNameModal = modalForm.querySelector('#input-name');
const inputPhoneModal = modalForm.querySelector('#input-phone');
const inputCityModal = modalForm.querySelector('#city-name');
const inputPersonalDate = modalForm.querySelector('#personal-data-checkbox');
const inputCheckbox = modalForm .querySelector('.modal-form__checkbox-mark');
const submitModalForm = modalForm.querySelector('.modal-form__button');
const modalInput = modalForm.querySelectorAll('.modal-form__input');

function validatePhone(phoneInput) {
  const phonePattern = /^\+7[\d]{10}$/;
  const phoneValue = phoneInput.value;

  if (!phonePattern.test(phoneValue)) {
    phoneInput.classList.add('form-write-to-us__input--error');
    phoneInput.setCustomValidity('Пожалуйста, введите номер телефона в формате: +7xxxxxxxxxx');
    return false;
  } else {
    phoneInput.classList.remove('form-write-to-us__input--error');
    phoneInput.setCustomValidity('');
    return true;
  }
}

inputCityModal.addEventListener('focus', (evt) => {
  evt.preventDefault();

  inputCityModal.classList.remove('modal-form__input--error');
});

submitModalForm.addEventListener('click', () => {

  if(!inputNameModal.validity.valid) {
    inputNameModal.classList.add('modal-form__input--error');

    return;
  } else {
    inputNameModal.classList.remove('modal-form__input--error');
    inputNameModal.setCustomValidity('');
  }

  if (!validatePhone(inputPhoneModal)) {
    return;
  }

  if(inputCityModal.value === '') {
    modalForm.querySelector('.modal-form__input-dropdown').classList.add('dropdown--error');
    inputCityModal.setCustomValidity('Нужно заполнить это поле');

    return;
  } else {
    modalForm.querySelector('.modal-form__input-dropdown').classList.remove('dropdown--error');
    inputCityModal.setCustomValidity('');
  }

  if(!inputPersonalDate.checked) {
    inputCheckbox.classList.add('modal-form__checkbox-mark--error');

    return;
  } else {
    inputCheckbox.classList.remove('modal-form__checkbox-mark--error');
    inputPersonalDate.setCustomValidity('');
  }

  if(inputNameModal.validity.valid && inputPhoneModal.validity.valid && inputCityModal.value !== '' && inputPersonalDate.checked) {
    modalForm.submit();

    modalForm.reset();
  }
});

function modalFormRestart() {
  for (let i = 0; i < modalInput.length; i++) {
    modalInput[i].addEventListener('input', () => {
      modalInput[i].classList.remove('modal-form__input--error');
    });
  }

  inputCityModal.addEventListener('click', () => {
    modalForm.querySelector('.modal-form__input-dropdown').classList.add('dropdown--error');
    inputCityModal.setCustomValidity('');
  });

  inputPersonalDate.addEventListener('input', () => {
    inputCheckbox.classList.remove('modal-form__checkbox-mark--error');
  });
}

modalFormRestart();
