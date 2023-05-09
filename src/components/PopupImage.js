import React from "react";

function PopupImage({ card, onClose }) {
  const { link, name } = card;
  const isOpen = !!(name && link);

  return (
    <div className={`popup image-popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <figure className="popup__figure">
          <img className="popup__image" src={ link } alt={ name } />
          <figcaption className="popup__caption">{ name }</figcaption>
        </figure>
        <button onClick={ onClose } type="button" className="popup__close-button button" aria-label="закрыть большую картинку" />
      </div>
    </div>
  )
}

export default PopupImage;