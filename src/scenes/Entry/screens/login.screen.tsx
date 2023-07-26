import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.LoginText}>Login</Text>
      <TextInput style={styles.Input} placeholder="Email" />
      <TextInput style={styles.Input} placeholder="Password" />
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.ForgotPassword}>Forgot your password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 40,
  },
  Input: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    borderRadius: 10,
    padding: 20,
  },
  LoginButton: {
    marginTop: 25,
    backgroundColor: "#5DB075",
    height: 60,
    width: "100%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: 30,
    fontWeight: "400",
    color: "#fff",
  },
  ForgotPassword: {
    color: "#5DB075",
    fontSize: 18,
    fontWeight: "500",
  },
});
