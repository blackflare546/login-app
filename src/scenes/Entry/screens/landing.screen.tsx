import React from "react";
import {
  LandingContainer,
  ButtonContainer,
  ButtonText,
} from "../styles/landing.styled";

// Define the shape of the navigation object
interface NavigationProps {
  navigate: (screen: string) => void;
}

// Define the shape of the props for the LandingScreen component
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

      <ButtonContainer>
        <ButtonText>Sign Up</ButtonText>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default LandingScreen;
