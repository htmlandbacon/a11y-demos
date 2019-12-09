/* eslint-disable */
var button = document.querySelector('.govuk-button');

function disableButton(e) {
  if (button.getAttribute('attempted')) {
    e.preventDefault();
  } else {
    button.setAttribute('aria-disabled', true);
    button.setAttribute('attempted', true);
    button.classList.add('govuk-button--disabled');
    return true;
  }
}

if (button.getAttribute('data-disable-double-submit')) {
  button.addEventListener('click', disableButton);
}
