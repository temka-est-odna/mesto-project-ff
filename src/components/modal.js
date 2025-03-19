export function openModal(modal) {
    modal.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeByEsc);
  }
  
  export function closeModal(modal) {
    modal.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeByEsc);
  }
  
  function closeByEsc(event) {
    if (event.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  }
  
  // Закрытие по клику на оверлей
  export function setupModalListeners() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      popup.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("popup") || event.target.classList.contains("popup__close")) {
          closeModal(popup);
        }
      });
    });
  }
  