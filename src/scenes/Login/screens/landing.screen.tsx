import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import {
  LandingContainer,
  ButtonContainer,
  ButtonText,
} from "../styles/landing.styled";

const LandingScreen = () => {
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

export default LandingScreen;
