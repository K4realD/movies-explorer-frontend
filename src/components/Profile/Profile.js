import { useState, useEffect, useContext } from "react";

import { CurrentUserContext } from "../../context/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { EMAIL_PATTERN, NAME_PATTERN } from "../../utils/constants";

import "./Profile.css";

function Profile({ handleUpdateUser, signOut, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const [prevValues, setPrevValues] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setPrevValues(true);
    } else {
      setPrevValues(false);
    }
  }, [values, currentUser]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);


  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, {currentUser.name}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__info">
          Имя
          <input
            className="profile__item"
            value={values.name || ""}
            name="name"
            placeholder="Введите имя"
            type="text"
            id="input-name"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            pattern={NAME_PATTERN}
          />
        </label>
        <span className="profile__info-error name-input__error">
          {errors.name}
        </span>
        <label className="profile__info">
          E-mail
          <input
            className="profile__item"
            value={values.email || ""}
            name="email"
            placeholder="Введите почту"
            id="input-email"
            type="email"
            required
            onChange={handleChange}
            pattern={EMAIL_PATTERN}
          />
        </label>
        <span className="profile__info-error email-input__error">
          {errors.email}
        </span>
        <button
          disabled={isValid ? false : true}
          className={
            !isValid || isLoading || prevValues
              ? "profile__btn profile__submit-btn profile__submit-btn_inactive"
              : "profile__btn profile__submit-btn"
          }
          type="submit"
          aria-label="Save"
        >
          Редактировать
        </button>
      </form>
      <button className="profile__btn profile__exit-btn" onClick={signOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
