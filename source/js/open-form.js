'use strict';
(function() {
  const buttonVacancy = document.querySelector('.vacancy__button');
  const modalSend = document.querySelector('.modal-send');
  const userName = modalSend.querySelector('#send-form__user-name');

  buttonVacancy.addEventListener('click', () => {
    modalSend.classList.remove('hidden');
    userName.focus();
  });

  window.openForm = {
    modalSend: modalSend,
    userName: userName
  };

})();
