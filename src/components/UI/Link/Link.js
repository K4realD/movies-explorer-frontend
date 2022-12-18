import { NavLink } from "react-router-dom";

import "./Link.css";

function Link({ children, isRouterLink, styles, stylesActive, to, action }) {
  const setActive = ({ isActive }) => isActive ? `${stylesActive} + ${styles} + link` : `${styles} + link`;

  return (
    <>
      {isRouterLink ? (
        <NavLink to={to} className={setActive} onClick={action}>
          {children}
        </NavLink>
      ) : (
        <a
          href={to}
          className={`${styles} link`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
}

export default Link;
