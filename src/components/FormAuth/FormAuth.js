import Logo from "../UI/Logo/Logo";
import Link from "../UI/Link/Link";

import "./FormAuth.css";

function FormAuth({ children, isRegister }) {
  return (
    <section className="auth">
      <div className="auth__container">
        <Logo />
        <h1 className="auth__title">
          {`${isRegister ? "Добро пожаловать!" : "Рады видеть!"}`}
        </h1>
        <form className="auth__form">
          {children}
          <button
            className={`auth__form-btn ${isRegister && "auth__form-btn_reg"}`}
            type="submit"
            aria-label={`${isRegister ? "Register" : "Login"}`}
          >
            {`${isRegister ? "Зарегестрироваться" : "Войти"}`}
          </button>
        </form>
        {isRegister ? (
          <div className="auth__nav">
            <p>Уже зарегистрированы?</p>
            <Link isRouterLink={true} styles={"auth__nav-link"} to="/signin">
              Войти
            </Link>
          </div>
        ) : (
          <div className="auth__nav">
            <p>Ещё не зарегистрированы?</p>
            <Link isRouterLink={true} styles={"auth__nav-link"} to="/signup">
              Регистрация
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormAuth;
