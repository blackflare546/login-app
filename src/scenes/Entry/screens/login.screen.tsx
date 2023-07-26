import React from "react";
import { Alert, Text } from "react-native";
import {
  LoginContainer,
  EmailInput,
  PassInput,
  LoginButton,
  ButtonText,
} from "../styles/login.styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the shape of form data
interface FormData {
  email: string;
  password: string;
}

// Define the shape of form errors
interface FormErrors {
  email?: string;
  password?: string;
}

// Define the shape of the navigation object
interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

// Define the shape of the props for the LoginScreen component
interface LandingScreenProps {
  navigation: NavigationProps;
}

const LoginScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
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
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data.email) {
      navigation.navigate("Dashboard", { email: data.email });
    } else {
      // Handle the case where there's no email in the data object
      Alert.alert("Error", "Invalid data submitted.");
    }
  };

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

export default LoginScreen;
