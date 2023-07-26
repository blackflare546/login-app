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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required("Password is required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: object) =>
    Alert.alert("Credentials", JSON.stringify(data));

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

      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}

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

      {errors.password && (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      )}

      <LoginButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Submit</ButtonText>
      </LoginButton>
    </LoginContainer>
  );
};
