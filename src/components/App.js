import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupEditProfile from './PopupEditProfile';
import PopupEditAvatar from './PopupEditAvatar';
import PopupAddPlace from './PopupAddPlace';
import PopupDeleteConfirm from './PopupDeleteConfirm';
import PopupImage from './PopupImage';





function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ link: '', name: '' });
  
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
    setSelectedCard({ link: '', name: '' })
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={ handleEditAvatarClick }
          onEditProfile={ handleEditProfileClick }
          onAddPlace={ handleAddPlaceClick }
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupEditProfile isOpen={ isEditProfilePopupOpen } onClose={ closeAllPopups }/>
        <PopupEditAvatar isOpen={ isEditAvatarPopupOpen } onClose={ closeAllPopups }/>
        <PopupAddPlace isOpen={ isAddPlacePopupOpen } onClose={ closeAllPopups }/>
        <PopupDeleteConfirm />
        <PopupImage card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
    
  );
}

export default App;