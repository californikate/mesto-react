import React from "react";

function Card({ card, onCardClick }) {
  const { link, name, likes } = card;

  return (
    <li className="element">
      <button type="button" className="element__delete-button button" aria-label="удалить карточку" />
      <img onClick={() => onCardClick(card)} className="element__photo" src={ link } alt={ name } />
      <div className="element__info">
        <h2 className="element__title">{ name }</h2>
        <div>
          <button type="button" className="element__like-button button" aria-label="поставить лайк" />
          <p className="element__like-counter">{ likes.lenght }</p>
        </div>
      </div>
    </li>
  )
}

export default Card;