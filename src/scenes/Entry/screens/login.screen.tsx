import React from "react";
import {
  LoginContainer,
  EmailInput,
  PassInput,
  LoginButton,
  ButtonText,
} from "../styles/login.styled";
import { useForm, Controller } from "react-hook-form";
import { Alert, Text } from "react-native";

export default () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: object) => console.log(data);

  return (
    <LoginContainer>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <EmailInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="email"
      />
      {errors.email && Alert.alert("Login Error", "Email is Required")}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <PassInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="password"
      />

      <LoginButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Submit</ButtonText>
      </LoginButton>
    </LoginContainer>
  );
};
