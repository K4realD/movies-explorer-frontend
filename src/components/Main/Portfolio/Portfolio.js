import Link from "../../UI/Link/Link";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <Link
            to="https://k4reald.github.io/russian-travel/index.html"
            isRouterLink={false}
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__link">
          <Link
            to="https://k4reald.github.io/mesto/index.html"
            isRouterLink={false}
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className="portfolio__link">
          <Link
            to="https://frontendk4d.nomoredomains.icu/"
            isRouterLink={false}
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
