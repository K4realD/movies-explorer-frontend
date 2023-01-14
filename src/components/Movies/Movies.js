import { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { getAutsorsedMovies } from "../../utils/MoviesApi";

import "./Movies.css";

function Movies({
  loggedIn,
  savedMovies,
  handleMovieDelete,
  handleMovieLike,
  filterMovies,
  filterByDuration,
}) {
  const [isLoading, setLoading] = useState(false);
  const [reqMovies, setReqMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setShortMovies] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [reqError, setReqError] = useState(false);

  const handleFilterMovies = (movies, query, short) => {
    const moviesFiltered = filterMovies(movies, query, short);
    setReqMovies(moviesFiltered);
    setFilteredMovies(
      short ? filterByDuration(moviesFiltered) : moviesFiltered
    );
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("filteredMovies", JSON.stringify(moviesFiltered));
  };

  const handleShortMovies = () => {
    setShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setFilteredMovies(filterByDuration(reqMovies));
    } else {
      setFilteredMovies(reqMovies);
    }
  };

  const handleSearch = async (query) => {
    try {
      localStorage.setItem("shortMovies", isShortMovies);
      localStorage.setItem("searchedMovies", query);

      if (localStorage.getItem("movies")) {
        const movies = JSON.parse(localStorage.getItem("movies"));
        handleFilterMovies(movies, query, isShortMovies);
      } else {
        setLoading(true);
        await getAutsorsedMovies().then((res) => {
          handleFilterMovies(res, query, isShortMovies);
          setReqError(false);
          setLoading(false);
        });
      }
    } catch (err) {
      setReqError(true);
      console.log(`Фильмы не найдены ${err}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("filteredMovies")) {
      const movies = JSON.parse(localStorage.getItem("filteredMovies"));
      setReqMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterByDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("searchedMovies")) {
      if (filteredMovies.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } else {
      setNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <main className="movies">
        <SearchForm
          loggedIn={loggedIn}
          onSearch={handleSearch}
          onFilter={handleShortMovies}
          isShortMovies={isShortMovies}
        />
        <MoviesCardList
          isSavedLocation={false}
          savedMovies={savedMovies}
          movies={filteredMovies}
          handleMovieLike={handleMovieLike}
          handleMovieDelete={handleMovieDelete}
          notFound={notFound}
          reqError={reqError}
          isLoading={isLoading}
        />
      </main>
    </>
  );
}

export default Movies;
