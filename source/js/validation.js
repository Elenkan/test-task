'use strict';
(function() {
  const inputs = Array.from(document.querySelectorAll('.send-form__input'));
  const contactForm = window.openForm.modalSend.querySelector('.send-form');
  const userEmail = window.openForm.modalSend.querySelector('#send-form__user-email');
  const userMessage = window.openForm.modalSend.querySelector('#send-form__user-message');
  const patternForName = /^[a-zA-Z]+$/;
  const patternForEmail = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/;
  const errorMsgName = 'Please use letters only';
  const errorMsgEmail = `Please enter a valid email address (the right format is 'email@mail.com')`;
  const errorMsg = 'This field is required';
  const ENTER_CODE = 13;

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
    inputs.forEach(input => validateInput(input, errorMsg));
    if (inputs.every(item => item.value)) {
      window.sendForm();
    }
  };


  window.openForm.userName.addEventListener('change', (evt) => validateInput(evt.target, errorMsgName, patternForName));
  userEmail.addEventListener('change', (evt) => validateInput(evt.target, errorMsgEmail, patternForEmail));
  userMessage.addEventListener('change', (evt) => validateInput(evt.target, errorMsg));
  contactForm.addEventListener('keydown', (evt) => {
    if (evt.keyCode == ENTER_CODE) {
      evt.preventDefault();
    }
  });
  contactForm.addEventListener('submit', submitFormHandler);

  window.validation = {
    contactForm: contactForm
  };

})();
