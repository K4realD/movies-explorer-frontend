import { useLocation } from "react-router-dom";

import Link from "../UI/Link/Link";

import "./Footer.css";

function Footer() {
  const location = useLocation();

  return (
    <footer className={location.pathname === "/"
    ? "footer"
    : location.pathname === "/movies"
    ? "footer"
    : location.pathname === "/saved-movies"
    ? "footer"
    : location.pathname === "/profile"
    ? "footer"
    : "footer__auth"}>
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
