import Link from "../UI/Link/Link";

import "./NavPopup.css";

function NavPopup({ isOpen, closeNavPopup }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <nav className={`nav ${isOpen && "nav_opened"}`}>
        <ul className="nav__list">
          <li className="nav__link">
            <Link
              isRouterLink={true}
              to="/"
              stylesActive={"link nav__link_active"}
              action={closeNavPopup}
            >
              Главная
            </Link>
          </li>
          <li className="nav__link">
            <Link
              isRouterLink={true}
              to="/movies"
              stylesActive={"link nav__link_active"}
              action={closeNavPopup}
            >
              Фильмы
            </Link>
          </li>
          <li className="nav__link">
            <Link
              isRouterLink={true}
              to="/saved-movies"
              stylesActive={"link nav__link_active"}
              action={closeNavPopup}
            >
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Link
          isRouterLink={true}
          to="/profile"
          styles="profile-link profile-link_location_nav"
          action={closeNavPopup}
        >
          Аккаунт
        </Link>
      </nav>
    </div>
  );
}

export default NavPopup;
