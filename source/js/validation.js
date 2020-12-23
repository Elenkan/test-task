'use strict';
import { sendForm, modalForm } from './send-form.js';

const inputs = Array.from(document.querySelectorAll('.send-form__input'));
const ENTER_CODE = 13;
const errorMessages = {
  input: 'Please fill in this required field',
  inputName: 'Please use letters only',
  inputEmail: `Please enter a valid email address (the right format is 'email@mail.com')`
};
const patterns = {
  inputName: /^[a-zA-Z]+$/,
  inputEmail: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/
};

const validateInput = (input, msg, pattern = /./) => {
  if (!input.value.match(pattern) || !input.value) {
    input.classList.add('error');
    input.setCustomValidity(msg);
  } else {
    input.classList.remove('error');
    input.setCustomValidity('');
  }
};

const submitFormHandler = (evt) => {
  evt.preventDefault();
  inputs.forEach(input => validateInput(input, errorMessages.input));
  if (inputs.every(item => item.value)) {
    sendForm();
  }
};

inputs.forEach(item => {
  item.addEventListener('change', (evt) => {
    if (item.hasAttribute('data-name')) {
      let dataValue = item.getAttribute('data-name');
      validateInput(evt.target, errorMessages[dataValue], patterns[dataValue]);
    } else {
      validateInput(evt.target, errorMessages.input);
    }
  });
});

modalForm.addEventListener('keydown', (evt) => {
  if (evt.keyCode == ENTER_CODE) {
    evt.preventDefault();
  }
});

modalForm.addEventListener('submit', submitFormHandler);
