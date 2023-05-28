import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupDeleteConfirm from './PopupDeleteConfirm';
import ImagePopup from './ImagePopup';
import { CurrenUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: '', about: '', avatar: '', _id: '' });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, [])
  
  useEffect(() => {
    api.getUserInfo()
      .then((currentUser) => setCurrentUser(currentUser))
      .catch((err) => console.log(err));
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null)
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => 
          state.map((item) => item._id === card._id ? newCard : item));
      })
      .catch((err) => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCards(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log(err))
  }

  function handleUpdateUser(items) {
    api.setUserInfo(items)
      .then((user) => {
        setCurrentUser(user)
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(item) {
    api.setUserAvatar(item)
      .then((user) => {
        setCurrentUser(user)
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(items) {
    api.addNewCard(items)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrenUserContext.Provider value={ currentUser }>
      <div className="root">
        <div className="page">
          <Header />
          <Main 
            onEditAvatar={ handleEditAvatarClick }
            onEditProfile={ handleEditProfileClick }
            onAddPlace={ handleAddPlaceClick }
            onCardClick={ handleCardClick }
            onCardLike={ handleCardLike }
            onCardDelete={ handleCardDelete }
            cards={ cards }
          />
          <Footer />
          <EditProfilePopup isOpen={ isEditProfilePopupOpen } onClose={ closeAllPopups } onUpdateUser={ handleUpdateUser }/>
          <EditAvatarPopup isOpen={ isEditAvatarPopupOpen } onClose={ closeAllPopups } onUpdateAvatar={ handleUpdateAvatar }/>
          <AddPlacePopup isOpen={ isAddPlacePopupOpen } onClose={ closeAllPopups } onAddPlace={ handleAddPlaceSubmit }/>
          <PopupDeleteConfirm />
          <ImagePopup card={ selectedCard } onClose={ closeAllPopups }/>
        </div>
      </div>
    </CurrenUserContext.Provider>
  );
}

export default App;