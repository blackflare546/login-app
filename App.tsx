import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "./src/scenes/Landing";

const Stack = createNativeStackNavigator();

const LoginScreen = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const SignupScreen = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
