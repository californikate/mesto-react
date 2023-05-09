import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={ isOpen }
      onClose= { onClose }
      name="edit"
      title="Редактиовать профиль"
      buttonText="Сохранить"
    >
      <input 
        type="text" 
        name="name" 
        id="name-input" 
        placeholder="Имя" 
        required 
        minLength="2"
        maxLength="40" 
        className="popup__input popup__input_type_name"
      />
      <span id="name-input-error" className="popup__input-error"></span>
      <input 
        type="text" 
        name="about" 
        id="job-input" 
        placeholder="О себе" 
        required 
        minLength="2" 
        maxLength="200"
        className="popup__input popup__input_type_job"
      />
      <span id="job-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;

    // <div className="popup edit-popup">
    //   <div className="popup__container">
    //     <button type="button" className="popup__close-button button" aria-label="закрыть редактирование профиля"></button>
    //     <form id="edit-profile" action="#" name="edit-profile" className="popup__form-element" noValidate>
    //       <h2 className="popup__title">Редактировать профиль</h2>
    //       <input type="text" name="name" id="name-input" placeholder="Имя" required minLength={2} maxLength={40} className="popup__input popup__input_type_name" />
    //       <span id="name-input-error" className="popup__input-error" />
    //       <input type="text" name="about" id="job-input" placeholder="О себе" required minLength={2} maxLength={200} className="popup__input popup__input_type_job" />
    //       <span id="job-input-error" className="popup__input-error" />
    //       <button type="submit" className="popup__save-button" aria-label="сохранить изменения профиля">Сохранить</button>
    //     </form>
    //   </div>
    // </div>