import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Container, EmailText, WelcomeText } from "../styles/dashboard.styled";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

// Define the type for route parameters
type DashboardScreenRouteParams = {
  email: string;
};

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const ListScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>List Screen</Text>
    </View>
  );
};

const DashboardScreen: React.FC = () => {
  const route =
    useRoute<RouteProp<Record<string, DashboardScreenRouteParams>, string>>();
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lists" component={ListScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
