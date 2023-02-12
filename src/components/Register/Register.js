import { useEffect } from "react";

import FormAuth from "../FormAuth/FormAuth";
import AuthFormInput from "../UI/AuthFormInput/AuthFormInput";

import useFormAndValidation from "../../hooks/useFormAndValidation";
import { EMAIL_PATTERN, NAME_PATTERN } from "../../utils/constants";

import "./Register.css";

function Register({ handleRegistration, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <FormAuth
      isRegister={true}
      handleSubmit={handleSubmit}
      isDisabled={!isValid}
      isLoading={isLoading}
    >
      <AuthFormInput
        isRegister={true}
        text={"Имя"}
        value={values.name || ''}
        type={"text"}
        name={"name"}
        id={"input-name"}
        handleChange={handleChange}
        pattern={NAME_PATTERN}
        errorText={errors.name}
      />
      <AuthFormInput
        isRegister={true}
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
        isRegister={true}
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

export default Register;
