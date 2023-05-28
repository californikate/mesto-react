import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  } 

  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm 
      isOpen={ isOpen }
      onClose= { onClose }
      onSubmit={ handleSubmit }
      isLoading={ isLoading }
      name="avatar"
      title="Обновить аватар"
      buttonText={ isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input 
        ref={ inputRef }
        type="url" 
        name="avatar" 
        id="avatar-input" 
        placeholder="Ссылка на аватар" 
        required 
        className="popup__input popup__input_type_place"
      />
      <span id="avatar-input-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

// <div className="popup avatar-popup">
//       <div className="popup__container">
//         <button type="button" className="popup__close-button button" aria-label="закрыть редактирование аватара"></button>
//         <form id="edit-avatar" action="#" name="edit-avatar" className="popup__form-element" noValidate>
//           <h2 className="popup__title">Обновить аватар</h2>
//           <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на аватар" required className="popup__input popup__input_type_place" />
//           <span id="avatar-input-error" className="popup__input-error" />
//           <button type="submit" className="popup__save-button" aria-label="обновить аватар">Сохранить</button>
//         </form>
//       </div>
//     </div>