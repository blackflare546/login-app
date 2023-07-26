import React from "react";

import {
  LandingContainer,
  ButtonContainer,
  ButtonText,
} from "../styles/landing.styled";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <LandingContainer>
      <ButtonContainer>
        <ButtonText>Login</ButtonText>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonText>Sign Up</ButtonText>
      </ButtonContainer>
    </LandingContainer>
  );
};
