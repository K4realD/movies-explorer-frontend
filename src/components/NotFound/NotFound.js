import "./NotFound.css";

function NotFound({ navigate }) {
  return (
    <section className="wrong-page">
      <h1 className="wrong-page__title">404</h1>
      <p className="wrong-page__text">Страница не найдена</p>
      <button type="button" onClick={navigate} className="wrong-page__btn">Назад</button>
    </section>
  );
}

export default NotFound;
