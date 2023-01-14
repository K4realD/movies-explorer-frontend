import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__info">
          Имя
          <input
            className="profile__item"
            defaultValue={"Виталий"}
            name="name"
            placeholder="Введите имя"
            type="text"
            id="input-name"
            required
            minLength="2"
            maxLength="30"
          />
        </label>
        <span className="profile__info-error name-input__error"></span>
        <label className="profile__info">
          E-mail
          <input
            className="profile__item"
            defaultValue={"pochta@yandex.ru"}
            name="email"
            placeholder="Введите почту"
            id="input-email"
            type="email"
            required
          />
        </label>
        <span className="profile__info-error email-input__error"></span>
        <button className="profile__btn profile__submit-btn" type="submit" aria-label="Save">Редактировать</button>
      </form>
      <button className="profile__btn profile__exit-btn">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
