import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isShortMovies }) {
  
  return (
    <label className="filter">
      <input
        type="checkbox"
        name="shorts"
        className="filter__input"
        onChange={onFilter}
        checked={JSON.parse(localStorage.getItem('shortMovies'))}
      />
      <span className="filter__checkbox"></span>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
