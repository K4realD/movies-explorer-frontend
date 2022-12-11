import { useState } from "react";

import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [isChecked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <label className="filter">
      <input
        type="checkbox"
        name="shorts"
        className="filter__input"
        onChange={handleCheck}
        checked={isChecked}
      />
      <span className="filter__checkbox"></span>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
