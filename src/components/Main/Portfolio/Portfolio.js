import Link from "../../UI/Link/Link";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <Link
            to="https://k4reald.github.io/russian-travel/index.html"
            isRouterLink={false}
            styles={"portfolio__link"}
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://k4reald.github.io/mesto/index.html"
            isRouterLink={false}
            styles={"portfolio__link"}
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://frontendk4d.nomoredomains.icu/"
            isRouterLink={false}
            styles={"portfolio__link"}
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
