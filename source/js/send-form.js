'use strict';
import { modal, popupSuccess } from './modal.js';
const modalForm = document.querySelector('.send-form');
const REQUEST_URL = 'https://jsonplaceholder.typicode.com/posts';
const INFO_CODE = 100;
const REDIRECTION_CODE = 300;
const form = new FormData(modalForm);

const sendForm = function() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', REQUEST_URL);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.onload = () => {
    if (xhr.status > INFO_CODE && xhr.status < REDIRECTION_CODE) {
      modalForm.reset();
      modal.classList.add('hidden');
      popupSuccess.classList.remove('hidden');
    }
  };

  xhr.send(JSON.stringify(form));
};

export { sendForm, modalForm };
