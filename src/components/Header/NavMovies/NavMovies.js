import Link from "../../UI/Link/Link";
import "./NavMovies.css";

function NavMovies({ openNavPopup, isOpen }) {
  return (
    <nav>
      <ul className="header__links-movies">
        <li>
          <Link
            isRouterLink={true}
            to="/movies"
            styles={"header__link-movies"}
            stylesActive={"header__link_active"}
          >
            Фильмы
          </Link>
        </li>
        <li>
          <Link
            isRouterLink={true}
            to="/saved-movies"
            styles={"header__link-movies"}
            stylesActive={"header__link_active"}
          >
            Сохраненные фильмы
          </Link>
        </li>
        <li>
          <Link
            isRouterLink={true}
            to="/profile"
            styles={"profile-link profile-link_location_header"}
          >
            Аккаунт
          </Link>
        </li>
      </ul>
      <div className="burger" onClick={openNavPopup}>
        <span
          className={`burger__icon ${isOpen && "burger__icon_active"}`}
        ></span>
      </div>
    </nav>
  );
}

export default NavMovies;
