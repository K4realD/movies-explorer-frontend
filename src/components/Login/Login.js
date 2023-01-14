import FormAuth from "../FormAuth/FormAuth";
import AuthFormInput from "../UI/AuthFormInput/AuthFormInput";

import "./Login.css";

function Login() {
  return (
    <FormAuth isRegister={false}>
      <AuthFormInput
        isRegister={false}
        text={"E-mail"}
        value={"pochta@yandex.ru"}
        type={"email"}
        name={"email"}
        id={"input-email"}
      />
      <AuthFormInput
        isRegister={false}
        text={"Пароль"}
        value={""}
        type={"password"}
        name={"password"}
        id={"input-password"}
      />
    </FormAuth>
  );
}

export default Login;
