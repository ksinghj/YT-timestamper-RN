import React from "react";
import { StyleSheet, Button } from "react-native";

export const button = ({ text, onPress }) => {
  <Button style={styles.btn} onPress={onPress}>
    {text}
  </Button>;
};

const styles = StyleSheet.create({
  btn: {
    color: "white",
    backgroundColor: "red",
    padding: 30,
    borderRadius: 5,
    // textAlign: "center"
  },
});
