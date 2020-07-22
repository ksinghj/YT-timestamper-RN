// Formik x React Native example
import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

const Form = ({ onChangeTextUrl }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Enter the video URL:</Text>
    <TextInput style={styles.input} onChangeText={text => onChangeTextUrl(text)} />
  </View>
)

// TODO: when input pressed setUrlConfirmed(false) to hide add timestamp screen

export default Form

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 7,
    fontSize: 18,
  },
  inputContainer: {
    alignSelf: "center",
    width: "90%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
})
