import React from "react";
import { StyleSheet, Button } from "react-native";

const MyButton = ({ text, onPress }) => {
  <Button style={styles.btn} onPress={onPress}>
    {text}
    Something?
  </Button>;
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    color: "white",
    backgroundColor: "red",
    padding: 30,
    borderRadius: 5,
    // textAlign: "center"
  },
});
