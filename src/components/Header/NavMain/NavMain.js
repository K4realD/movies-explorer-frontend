import Link from "../../UI/Link/Link";
import NavMovies from "../NavMovies/NavMovies";
import "./NavMain.css";

function NavMain({ isLoggedIn, openNavPopup, isOpen }) {
  return (
    <>
      {!isLoggedIn ? (
        <nav>
          <ul className="header__links-main">
            <li>
              <Link isRouterLink={true} to="/signup" styles={"header__link"}>
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                isRouterLink={true}
                to="/signin"
                styles={"header__link header__link-login"}
                stylesActive={"header__link"}
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <NavMovies openNavPopup={openNavPopup} isOpen={isOpen}/>
      )}
    </>
  );
}

export default NavMain;
