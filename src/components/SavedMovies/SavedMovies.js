import { useState, useEffect } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies({
  loggedIn,
  savedMovies,
  handleMovieDelete,
  filterMovies,
  filterByDuration,
}) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setShortMovies] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleShortMovies = () => {
    setShortMovies(!isShortMovies);
  };

  useEffect(() => {
    const movies = filterMovies(savedMovies, query);
    setFilteredMovies(isShortMovies ? filterByDuration(movies) : movies);
  }, [savedMovies, isShortMovies, query, filterByDuration, filterMovies]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <main className="saved-movies">
      <SearchForm
        loggedIn={loggedIn}
        onFilter={handleShortMovies}
        onSearch={handleSearch}
        isShortMovies={isShortMovies}
      />
      <MoviesCardList
        isSavedLocation={true}
        savedMovies={savedMovies}
        movies={filteredMovies}
        handleMovieDelete={handleMovieDelete}
        notFound={notFound}
      />
    </main>
  );
}

export default SavedMovies;
