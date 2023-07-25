import React from "react";

import {
  LandingContainer,
  ButtonContainer,
  ButtonText,
} from "../styles/landing.styled";

export default () => {
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
