import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import NavPopup from "../NavPopup/NavPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import {
  signOut,
  getUserInfo,
  getMovies,
  register,
  login,
  setUserInfo,
  postMovie,
  deleteMovie,
} from "../../utils/MainApi";

function App() {
  const [isNavPopupOpen, setNavPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleNavPopupState = () => {
    setNavPopupOpen(!isNavPopupOpen);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleLoggedIn = useCallback(async () => {
    try {
      const res = await getUserInfo();
      setCurrentUser(res);
      setLoggedIn(true);
    } catch (err) {
      console.log(`Пользователь не залогинен ${err}`);
      setLoggedIn(false);
    }
  }, []);

  const handleMoviesData = useCallback(async () => {
    try {
      if (isLoggedIn) {
        const res = await getMovies();
        if (res.length > 0) {
          setSavedMovies(res);
        }
      }
    } catch (err) {
      console.log(`Фильмы не загрузились ${err}`);
    }
  }, [isLoggedIn]);

  const handleAuthorization = async ({ email, password }) => {
    try {
      setLoading(true);
      await login(email, password).then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        navigate("/movies");
        setLoading(false);
      });
    } catch (err) {
      console.log(`Авторизация не пройдена ${err}`);
    }
  };

  const handleRegistration = async ({ name, email, password }) => {
    try {
      await register(name, email, password);
      await handleAuthorization({ email, password });
    } catch (err) {
      console.log(`Регистрация не пройдена ${err}`);
    }
  };

  const handleSignOut = () => {
    return signOut().then(() => {
      setLoggedIn(false);
      localStorage.clear();
      setCurrentUser({});
      setSavedMovies([]);
      navigate("/");
    });
  };

  const handleAuthorizationError = async (err) => {
    if (err === "Error: 401") {
      await handleSignOut().then(() => {
        navigate("/signin");
      });
    }
  };

  const handleUpdateUser = async (data) => {
    try {
      setLoading(true);
      const res = await setUserInfo(data);
      setCurrentUser(res);
      setLoading(false);
    } catch (err) {
      console.log(`Данные пользователя не обновлены ${err}`);
      handleAuthorizationError(err);
    }
  };

  const handleMovieLike = async (movie) => {
    try {
      const res = await postMovie(movie);
      setSavedMovies([res, ...savedMovies]);
    } catch (err) {
      console.log(`Сохранение фильма не удалось ${err}`);
      handleAuthorizationError(err);
    }
  };

  const handleMovieDelete = async (movie) => {
    try {
      await deleteMovie(movie._id);
      setSavedMovies((movies) =>
        movies.filter((item) => item._id !== movie._id)
      );
    } catch (err) {
      console.log(`Удаление фильма не удалось ${err}`);
      handleAuthorizationError(err);
    }
  };

  const filterMovies = (movies, query) => {
    const moviesByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return (
        movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
      );
    });
    return moviesByQuery;
  };

  const filterByDuration = (movies) => {
    return movies.filter((movie) => movie.duration < 40);
  };

  useEffect(() => {
    handleMoviesData();
  }, [handleMoviesData]);

  useEffect(() => {
    handleLoggedIn();
  }, [handleLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        openNavPopup={handleNavPopupState}
        isOpen={isNavPopupOpen}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              loggedIn={isLoggedIn}
              savedMovies={savedMovies}
              handleMovieDelete={handleMovieDelete}
              handleMovieLike={handleMovieLike}
              filterMovies={filterMovies}
              filterByDuration={filterByDuration}
              component={Movies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              loggedIn={isLoggedIn}
              savedMovies={savedMovies}
              handleMovieDelete={handleMovieDelete}
              filterMovies={filterMovies}
              filterByDuration={filterByDuration}
              component={SavedMovies}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              handleUpdateUser={handleUpdateUser}
              signOut={handleSignOut}
              isLoading={isLoading}
              loggedIn={isLoggedIn}
              component={Profile}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              handleRegistration={handleRegistration}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              handleAuthorization={handleAuthorization}
              isLoading={isLoading}
            />
          }
        />
        <Route path="*" element={<NotFound navigate={handleBack} />} />
      </Routes>
      <Footer />
      <NavPopup isOpen={isNavPopupOpen} closeNavPopup={handleNavPopupState} />
    </CurrentUserContext.Provider>
  );
}

export default App;
