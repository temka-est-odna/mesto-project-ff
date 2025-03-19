export function createCard(card, deleteCallback, likeCallback, openImageCallback) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeButton = cardElement.querySelector(".card__like-button");
  
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
  
    // Удаление карточки
    deleteButton.addEventListener("click", () => {
      deleteCallback(cardElement);
    });
  
    // Лайк карточки
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__like-button_is-active");
    });
  
    // Открытие изображения в модальном окне
    cardImage.addEventListener("click", () => {
      openImageCallback(card);
    });
  
    return cardElement;
  }
  
  export function deleteCard(cardElement) {
    cardElement.remove();
  }
  