import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <fieldset className="search__container">
        <input className="search__input" type="text" name="film" placeholder="Фильм" required/>
        <button className="search__btn" type="submit"/>
      </fieldset>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
