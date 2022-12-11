import Link from "../UI/Link/Link";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__nav">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__links">
          <li>
            <Link
              isRouterLink={false}
              to="https://practicum.yandex.ru"
              styles="footer__link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              isRouterLink={false}
              to="https://github.com/K4realD"
              styles="footer__link"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
