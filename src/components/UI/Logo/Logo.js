import Link from '../Link/Link';

import "./Logo.css";
import logo from "../../../images/logo.svg";

function Logo() {
  return (
    <Link isRouterLink={true} to="/">
      <img src={logo} alt="логотип" className="logo" />
    </Link>
  );
}

export default Logo;
