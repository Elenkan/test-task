'use strict';
(function() {

  window.sendForm = function() {
    const REQUEST_URL = 'https://jsonplaceholder.typicode.com/posts';
    const INFO_CODE = 100;
    const REDIRECTION_CODE = 300;
    const form = new FormData(window.contactForm);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', REQUEST_URL);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    xhr.onload = () => {
      if (xhr.status > INFO_CODE && xhr.status < REDIRECTION_CODE) {
        window.openForm.modalSend.classList.add('hidden');
        window.popupClose.popup.classList.remove('hidden');
        window.scroll({
            top: 10,
            behavior: 'smooth'
          });
      }
    };

    xhr.send(JSON.stringify(form));

  };
})();
