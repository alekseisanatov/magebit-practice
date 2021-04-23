const formElement = document.querySelector('.intro__form');
const inputElement = document.querySelector('.intro__input');
const checkboxElement = document.getElementById('intro-checkbox');
const buttonElement = document.querySelector('.intro__input-button');
const errorElement = document.querySelector('.intro__form_error');

function showError() {
    inputElement.classList.add('intro__input_type_active');
    errorElement.classList.add('intro__form_error_active');
    if(!inputElement.validity.valueMissing) {
        errorElement.textContent = 'Please provide a valid e-mail address';
    }
    if(!inputElement.validity.typeMismatch) {
        errorElement.textContent = 'Email address is required';
    }
    if(inputElement.value.slice(-3) === '.co') {
        errorElement.textContent = 'We are not accepting subscriptions from Colombia emails';
    }
    if(!checkboxElement.validity.valid) {
        errorElement.textContent = 'You must accept the terms and conditions';
    }
}

function hideError() {
    errorElement.classList.remove('intro__form_error_active');
    inputElement.classList.remove('intro__input_type_active');
    errorElement.textContent = '';
}

function toggleButtonState() {
    if(!inputElement.validity.valid) {
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.removeAttribute('disabled');
    }
}

function checkValidity() {
    if(!inputElement.validity.valid) {
        showError();
    } else {
        hideError();
    }
}

function setEventListeners () {
    inputElement.addEventListener('input', () => {
        checkValidity();
        toggleButtonState(inputElement);
        toggleButtonState(checkboxElement);
    });
    toggleButtonState(inputElement);
    toggleButtonState(checkboxElement);
}

function enableValidation() {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    setEventListeners();
}

enableValidation();

