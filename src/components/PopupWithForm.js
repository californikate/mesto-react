import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  return (
    <div className={`popup ${name}-popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button 
          onClick={ onClose }
          type="button" 
          className="popup__close-button button" 
          aria-label="закрыть редактирование профиля"
        ></button>
        <form 
          id={`form-popup-${name}`} 
          action="#" 
          name={`form-popup-${name}`} 
          className="popup__form-element" 
          noValidate
        >
          <h2 className="popup__title">{ title }</h2>
          { children }
          <button 
            type="submit" 
            className="popup__save-button" 
            aria-label="сохранить изменения профиля"
          >{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;