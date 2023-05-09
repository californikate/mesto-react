import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupDeleteConfirm() {
  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText="Да"
    ></PopupWithForm>
  );
}

export default PopupDeleteConfirm;

  // <div className="popup confirm-popup">
  //     <div className="popup__container">
  //       <button type="button" className="popup__close-button button" aria-label="закрыть удаление карточки"></button>
  //       <h2 className="popup__title">Вы уверены?</h2>
  //       <form id="confirm" action="#" name="confirm" className="popup__form-element" noValidate>
  //         <button type="submit" className="popup__save-button" aria-label="подтвердить удаление карточки">Да</button>
  //       </form>
  //     </div>
  //   </div>