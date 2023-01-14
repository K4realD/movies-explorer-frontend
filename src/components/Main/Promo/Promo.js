import Link from "../../UI/Link/Link";

import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета
          Веб-разработки.
        </h1>
        <p className="promo__info">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link
          isRouterLink={false}
          to="https://github.com/K4realD/movies-explorer-frontend"
          styles="promo__link"
        >
          Узнать больше
        </Link>
      </div>
      <div className="promo__image" />
    </section>
  );
}

export default Promo;
