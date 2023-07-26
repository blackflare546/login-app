import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.SignupText}>Sing Up</Text>
      <TextInput style={styles.Inputs} placeholder="Name" />
      <TextInput style={styles.Inputs} placeholder="Email" />
      <TextInput style={styles.Inputs} placeholder="Password" />
      <TouchableOpacity style={styles.SubmitButton}>
        <Text style={styles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>
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
  SignupText: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 40,
  },
  Inputs: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  SubmitButton: {
    backgroundColor: "#5DB075",
    height: 60,
    width: "100%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: 24,
    fontWeight: "400",
    color: "#fff",
  },
});
