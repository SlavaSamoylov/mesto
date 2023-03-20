let nameElement = document.querySelector ('.profile__info-title');
let jobElement = document.querySelector ('.profile__info-description');
let editButtonElement = document.querySelector ('.profile__edit-button');
let popupElement = document.querySelector ('.popup');
let closeButtonElement = document.querySelector ('.popup__close');
let formElement = document.querySelector ('.popup__form');
let nameInput = document.getElementById ('popup__form-input_name');
let jobInput = document.getElementById ('popup__form-input_job');

function showPopup() {
    popupElement.classList.add('popup__opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
}

function closePopup() {
    popupElement.classList.remove('popup__opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closePopup();
}

    editButtonElement.addEventListener('click', showPopup);
    closeButtonElement.addEventListener('click', closePopup);
    formElement.addEventListener('submit', handleFormSubmit);