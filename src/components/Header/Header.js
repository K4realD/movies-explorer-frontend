import { useLocation } from "react-router-dom";

import "./Header.css";

import Logo from "../UI/Logo/Logo";

import NavMovies from "./NavMovies/NavMovies";
import NavMain from "./NavMain/NavMain";

function Header({ openNavPopup, isOpen, isLoggedIn }) {
  const location = useLocation();

  return (
    <header
      className={
        location.pathname === "/"
          ? "header__main header"
          : location.pathname === "/movies"
          ? "header"
          : location.pathname === "/saved-movies"
          ? "header"
          : location.pathname === "/profile"
          ? "header"
          : "header__auth"
      }
    >
      <Logo />
      {location.pathname === "/" ? (
        <NavMain isLoggedIn={isLoggedIn} openNavPopup={openNavPopup} isOpen={isOpen}/>
      ) : (
        <NavMovies openNavPopup={openNavPopup} isOpen={isOpen} />
      )}
    </header>
  );
}

export default Header;
