import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button type="button" className="element__delete-button button" aria-label="удалить карточку" />
      <img onClick={ handleClick } className="element__photo" style={{ backgroundImage: `url(${card.link})` }} alt={ card.name } />
      <div className="element__info">
        <h2 className="element__title">{ card.name }</h2>
        <div>
          <button type="button" className="element__like-button button" aria-label="поставить лайк" />
          <p className="element__like-counter">{ card.likes.length }</p>
        </div>
      </div>
    </li>
  )
}

export default Card;