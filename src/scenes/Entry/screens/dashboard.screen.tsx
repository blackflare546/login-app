import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Container, EmailText, WelcomeText } from "../styles/dashboard.styled";

// Define the type for route parameters
type DashboardScreenRouteParams = {
  email: string;
};

const DashboardScreen: React.FC = () => {
  const route =
    useRoute<RouteProp<Record<string, DashboardScreenRouteParams>, string>>();
  const { email } = route.params;

  return (
    <Container>
      <WelcomeText>Welcome to Dashboard</WelcomeText>
      <EmailText>{email}</EmailText>
    </Container>
  );
};

export default DashboardScreen;
