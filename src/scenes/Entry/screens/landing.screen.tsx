import React from "react";

import {
  LandingContainer,
  ButtonContainer,
  ButtonText,
} from "../styles/landing.styled";

interface NavigationProps {
  navigate: (screen: string) => void;
}

interface LandingScreenProps {
  navigation: NavigationProps;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <LandingContainer>
      <ButtonContainer onPress={() => navigate("Login")}>
        <ButtonText>Login</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigate("Signup")}>
        <ButtonText>Sign Up</ButtonText>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default LandingScreen;
