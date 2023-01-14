import "./AuthFormInput.css";

function AuthFormInput({ text, isRegister, value, type, name, id }) {
  return (
    <label
      className="auth-form__input"
    >
      {text}
      <input
        className={`auth-form__item ${isRegister && "auth-form__item_reg"}`}
        defaultValue={value}
        type={type}
        name={name}
        id={id}
        maxLength={`${name === "name" ? "30" : ""}`}
        minLength={`${name === "name" ? "2" : ""}`}
        placeholder=""
      />
      <span className="auth-form__error"></span>
    </label>
  );
}

export default AuthFormInput;
