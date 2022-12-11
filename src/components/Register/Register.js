import FormAuth from "../FormAuth/FormAuth";
import AuthFormInput from "../UI/AuthFormInput/AuthFormInput";

import "./Register.css";

function Register() {
  return (
    <FormAuth isRegister={true}>
      <AuthFormInput
        isRegister={true}
        text={"Имя"}
        value={"Виталий"}
        type={"text"}
        name={"name"}
        id={"input-name"}
      />
      <AuthFormInput
        isRegister={true}
        text={"E-mail"}
        value={"pochta@yandex.ru"}
        type={"email"}
        name={"email"}
        id={"input-email"}
      />
      <AuthFormInput
        isRegister={true}
        text={"Пароль"}
        value={""}
        type={"password"}
        name={"password"}
        id={"input-password"}
      />
    </FormAuth>
  );
}

export default Register;
