'use strict';
(function() {
  const closeButton = document.querySelector('.popup-success__close-button');
  const popup = document.querySelector('.popup-success');

  closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  window.popupClose = {
    popup: popup
  };
})();
