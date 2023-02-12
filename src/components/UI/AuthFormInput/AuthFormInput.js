import "./AuthFormInput.css";

function AuthFormInput({ text, isRegister, value, type, name, id, errorText, handleChange, pattern }) {
  return (
    <label
      className="auth-form__input"
    >
      {text}
      <input
        className={`auth-form__item ${isRegister && "auth-form__item_reg"}`}
        value={value}
        type={type}
        name={name}
        id={id}
        maxLength={`${name === "name" ? "30" : ""}`}
        minLength={`${name === "name" ? "2" : ""}`}
        placeholder=""
        onChange={handleChange}
        pattern={pattern}
        required
      />
      <span className="auth-form__error">{errorText}</span>
    </label>
  );
}

export default AuthFormInput;
