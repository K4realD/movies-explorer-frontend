import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm({ onSearch, onFilter, isShortMovies, loggedIn }) {
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState(false);

  const location = useLocation();

  const handleQuery = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === 0) {
      setQueryError(true);
    } else {
      setQueryError(false);
      onSearch(query);
    }
  };

  useEffect(() => {
    if(location.pathname === '/movies' && localStorage.getItem('searchedMovies')) {
      const savedQuery = localStorage.getItem('searchedMovies');
      setQuery(savedQuery);
    }
  }, [location]);

  useEffect(() => {
    if(!loggedIn) {
      setQuery('');
    }
  },[loggedIn]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <fieldset className="search__container">
        <input
          className="search__input"
          type="text"
          name="film"
          placeholder="Фильм"
          value={query || ''}
          onChange={handleQuery}
        />
        <button className="search__btn" type="submit" />
      </fieldset>
      {queryError && <span className="search__error">Нужно ввести ключевое слово</span>}
      <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
    </form>
  );
}

export default SearchForm;
