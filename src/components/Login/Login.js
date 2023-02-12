import { useEffect } from "react";

import FormAuth from "../FormAuth/FormAuth";
import AuthFormInput from "../UI/AuthFormInput/AuthFormInput";

import useFormAndValidation from "../../hooks/useFormAndValidation";
import { EMAIL_PATTERN } from "../../utils/constants";

import "./Login.css";


function Login({ handleAuthorization, isLoading }) {
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAuthorization({
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    setValues({
      email: '',
      password: '',
    });
  }, [setValues]);

  return (
    <FormAuth
      isRegister={false}
      handleSubmit={handleSubmit}
      isDisabled={!isValid}
      isLoading={isLoading}
    >
      <AuthFormInput
        isRegister={false}
        text={"E-mail"}
        value={values.email || ''}
        type={"email"}
        name={"email"}
        id={"input-email"}
        handleChange={handleChange}
        pattern={EMAIL_PATTERN}
        errorText={errors.email}
      />
      <AuthFormInput
        isRegister={false}
        text={"Пароль"}
        value={values.password || ''}
        type={"password"}
        name={"password"}
        id={"input-password"}
        handleChange={handleChange}
        errorText={errors.password}
      />
    </FormAuth>
  );
}

export default Login;
