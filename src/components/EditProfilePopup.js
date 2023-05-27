import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrenUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrenUserContext);

  // После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]); 

  // Обработчики изменения инпута обновляют стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={ isOpen }
      onClose= { onClose }
      onSubmit={ handleSubmit }
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <input 
        value={ name }
        onChange={ handleNameChange }
        type="text" 
        name="name" 
        id="name-input" 
        placeholder="Имя" 
        required 
        minLength="2"
        maxLength="40" 
        className="popup__input popup__input_type_name"
      />
      <span id="name-input-error" className="popup__input-error" />
      <input 
        value={ description }
        onChange={ handleDescriptionChange }
        type="text" 
        name="about" 
        id="job-input" 
        placeholder="О себе" 
        required 
        minLength="2" 
        maxLength="200"
        className="popup__input popup__input_type_job"
      />
      <span id="job-input-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;

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