'use strict';
const body = document.querySelector('body');
const buttonVacancy = document.querySelector('.vacancy__button');
const modalOverlay = document.querySelector('.overlay-modal');
const modal = document.querySelector('.modal-wrapper');
const userName = document.querySelector('#send-form__user-name');
const closeElements = Array.from(document.querySelectorAll('.js-close'));
const popupSuccess = document.querySelector('.popup-success');
const scrolledElement = (el) => {
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

buttonVacancy.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  modal.classList.remove('hidden');
  body.classList.add('body-remove-scroll');
  userName.focus();
  scrolledElement(modal);
  scrolledElement(window);
});


closeElements.forEach(element => {
  element.addEventListener('click', () => {
    if (!popupSuccess.classList.contains('hidden')) {
      popupSuccess.classList.add('hidden');
    } else {
      modal.classList.add('hidden');
    }
    modalOverlay.classList.add('hidden');
    body.classList.remove('body-remove-scroll');
  });
});

export { modal, popupSuccess };
