import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  View,
} from "react-native"
import NumberInput from "./NumberInput"

const AddTimestampScreen = ({ setTitle, onHourChange, onMinutesChange, onSecondsChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Add a timestamp:</Text>
          <TextInput
            style={styles.input}
            placeholder=" Timestamp title (optional)"
            onChangeText={val => setTitle(val)}
          />
        </View>
        <View style={styles.numpads}>
          <View style={styles.numpad}>
            <NumberInput data-function="hours" onChangeHandler={onHourChange} unit="Hours" />
          </View>
          <View style={styles.numpad}>
            <NumberInput data-function="minutes" onChangeHandler={onMinutesChange} unit="Minutes" />
          </View>
          <View style={styles.numpad}>
            <NumberInput data-function="seconds" onChangeHandler={onSecondsChange} unit="Seconds" />
          </View>
        </View>
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
  numpads: {
    marginLeft: 20,
    marginTop: 20,
  },
  numpad: {
    marginTop: 10,
  },
})
