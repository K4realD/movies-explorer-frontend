import { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import {
  DISPLAY_WIDTH_LARGE,
  DISPLAY_WIDTH_MEDIUM,
  DISPLAY_WIDTH_SMALL,
  DISPLAY_WIDTH_XL,
  MOVIES_AMOUNT_LARGE,
  MOVIES_AMOUNT_SMALL,
  MOVIES_AMOUNT_MEDIUM,
} from "../../utils/constants";

import "./MoviesCardList.css";

function MoviesCardList({
  isSavedLocation,
  savedMovies,
  movies,
  handleMovieLike,
  handleMovieDelete,
  notFound,
  reqError,
  isLoading,
}) {
  const [moviesAmount, setMoviesAmount] = useState(0);

  const handleMoviesAmount = () => {
    const displayWidth = window.innerWidth;
    if (displayWidth > DISPLAY_WIDTH_LARGE) {
      setMoviesAmount(MOVIES_AMOUNT_LARGE);
    } else if (displayWidth > DISPLAY_WIDTH_MEDIUM) {
      setMoviesAmount(MOVIES_AMOUNT_MEDIUM);
    } else if (displayWidth > DISPLAY_WIDTH_SMALL) {
      setMoviesAmount(MOVIES_AMOUNT_SMALL);
    }
  };

  const loadMoreMovies = () => {
    const displayWidth = window.innerWidth;
    if (displayWidth > DISPLAY_WIDTH_XL) {
      setMoviesAmount(moviesAmount + 3);
    } else if (displayWidth > DISPLAY_WIDTH_SMALL) {
      setMoviesAmount(moviesAmount + 2);
    }
  };

  const handleSavedMovies = (savedMovie, movie) => {
    return savedMovie.find((item) => item.movieId === movie.id);
  };

  useEffect(() => {
    handleMoviesAmount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleMoviesAmount);
    }, 650);
  });

  return (
    <>
      {isLoading && <Preloader />}
      {notFound && !isLoading && (
        <p className="movies-list__error">Ничего не найдено</p>
      )}
      {reqError && !isLoading && (
        <p className="movies-list__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      {!isSavedLocation ? (
        <>
          <ul className="movies-list">
            {movies.slice(0, moviesAmount).map((movie) => {
              return (
                <MoviesCard
                  key={isSavedLocation ? movie.movieId : movie.id}
                  movie={movie}
                  isSaved={handleSavedMovies(savedMovies, movie)}
                  savedMovies={savedMovies}
                  isSavedLocation={isSavedLocation}
                  handleMovieLike={handleMovieLike}
                  handleMovieDelete={handleMovieDelete}
                />
              );
            })}
          </ul>
          <div className="movies__more">
            {movies.length > moviesAmount ? (
              <button
                type="button"
                className="movies__more-btn"
                onClick={loadMoreMovies}
              >
                Ещё
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <ul className="movies-list">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={isSavedLocation ? movie.movieId : movie.id}
                movie={movie}
                isSaved={handleSavedMovies(savedMovies, movie)}
                savedMovies={savedMovies}
                isSavedLocation={isSavedLocation}
                handleMovieLike={handleMovieLike}
                handleMovieDelete={handleMovieDelete}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MoviesCardList;
