import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import './App.css';

import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import NavPopup from '../NavPopup/NavPopup';

function App() {
  const [isNavPopupOpen, setNavPopupOpen] = useState(false);

  const handleNavPopupState = () => {
    setNavPopupOpen(!isNavPopupOpen);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return(
    <>
      <Header openNavPopup={handleNavPopupState} isOpen={isNavPopupOpen}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound navigate={handleBack}/>} />
      </Routes>
      <NavPopup isOpen={isNavPopupOpen} closeNavPopup={handleNavPopupState} />
    </>
  );
}

export default App;
