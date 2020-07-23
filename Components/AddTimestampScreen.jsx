import React from "react"
import { StyleSheet, SafeAreaView, Keyboard, TouchableWithoutFeedback, Text } from "react-native"
import NumberInput from "./NumberInput"

const AddTimestampScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Add a timestamp:</Text>
        <NumberInput />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default AddTimestampScreen

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    marginTop: 80,
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
})
