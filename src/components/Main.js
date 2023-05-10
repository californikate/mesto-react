import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatat] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(({name, about, avatar}) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatat(avatar);
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, [])

  return (
    <main className="main">
        <section className="profile" aria-label="профиль">
          <div className="profile__info">
            <button onClick={onEditAvatar} type="button" className="profile__avatar-button button" aria-label="редактировать аватар">
              <img src={userAvatar} className="profile__avatar" alt="аватар пользователя." />
            </button>
            <div className="profile__container">
              <div className="profile__name">
                <h1 className="profile__title">{ userName }</h1>
                <button onClick={onEditProfile} type="button" className="profile__edit-button button" aria-label="редактировать профиль" />
              </div>
              <p className="profile__subtitle">{ userDescription }</p>
            </div>
          </div>
          <button onClick={onAddPlace} type="button" className="profile__add-button button" aria-label="добавить новую карточку" />
        </section>
        <section className="elements" aria-label="карточки мест">
          <ul className="elements__items">
          {cards.map((card) => (<Card card={card} key={card._id} onCardClick={onCardClick} />))}
          </ul>
        </section>
      </main>
  )
}

export default Main;