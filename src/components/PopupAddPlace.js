import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddPlace({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={ isOpen }
      onClose= { onClose }
      name="add"
      title="Новое место"
      buttonText="Создать"
    >
      <input 
        type="text" 
        name="place" 
        id="place-input" 
        placeholder="Название" 
        required 
        minLength="2" 
        maxLength="30" 
        className="popup__input popup__input_type_place"
      />
      <span id="place-input-error" className="popup__input-error"></span>
      <input 
        type="url" 
        name="link" 
        id="url-input" 
        placeholder="Ссылка на картинку" 
        required
        className="popup__input popup__input_type_url"
      />
      <span id="url-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default PopupAddPlace;

  // <div className="popup add-popup">
  //     <div className="popup__container">
  //       <button type="button" className="popup__close-button button" aria-label="закрыть добавление карточки"></button>
  //       <form id="add-profile" action="#" name="add-profile" className="popup__form-element" noValidate>
  //         <h2 className="popup__title">Новое место</h2>
  //         <input type="text" name="place" id="place-input" placeholder="Название" required minLength={2} maxLength={30} className="popup__input popup__input_type_place" />
  //         <span id="place-input-error" className="popup__input-error" />
  //         <input type="url" name="link" id="url-input" placeholder="Ссылка на картинку" required className="popup__input popup__input_type_url" />
  //         <span id="url-input-error" className="popup__input-error" />
  //         <button type="submit" className="popup__save-button" aria-label="создать карточку">Создать</button>
  //       </form>
  //     </div>
  //   </div>