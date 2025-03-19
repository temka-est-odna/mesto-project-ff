import { createCard, deleteCard } from "../components/card.js";
import { openModal, closeModal, setupModalListeners } from "../components/modal.js";
import { initialCards } from "./cards.js";
import "../styles/index.css"; // Важно для Webpack


import avatarImage from '../images/avatar.jpg';
import logoImage from '../images/logo.svg';

// Пример использования:
document.querySelector('.profile__image').style.backgroundImage = `url(${avatarImage})`;

const logoElement = document.querySelector('.logo');
logoElement.src = logoImage;

// DOM элементы
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup_type_edit");
const profileForm = profilePopup.querySelector(".popup__form");
const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardAddButton = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector(".popup_type_new-card");
const cardForm = cardPopup.querySelector(".popup__form");
const placeInput = cardForm.querySelector(".popup__input_type_card-name");
const linkInput = cardForm.querySelector(".popup__input_type_url");

const imagePopup = document.querySelector(".popup_type_image");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Функция открытия изображения
function openImagePopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openModal(imagePopup);
}

// Рендер карточек
initialCards.forEach((card) => {
  const cardElement = createCard(card, deleteCard, null, openImagePopup);
  placesList.appendChild(cardElement);
});

// Открытие попапа редактирования профиля
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profilePopup);
});

// Сохранение изменений профиля
profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profilePopup);
});

// Открытие попапа добавления карточки
cardAddButton.addEventListener("click", () => {
  cardForm.reset();
  openModal(cardPopup);
});

// Добавление новой карточки
cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = {
    name: placeInput.value,
    link: linkInput.value
  };
  const cardElement = createCard(newCard, deleteCard, null, openImagePopup);
  placesList.prepend(cardElement);
  closeModal(cardPopup);
});

// Добавляем обработчики для закрытия попапов
setupModalListeners();
