import React from "react"
import { StyleSheet, View, Text } from "react-native"
import NumericInput from "react-native-numeric-input"

const NumberInput = ({ onChangeHandler, unit }) => (
  <View style={styles.container}>
    <NumericInput
      type="up-down"
      onChange={val => onChangeHandler(val)}
      minValue={0}
      maxValue={60}
    />
    <Text style={styles.label}>{unit}</Text>
  </View>
)

export default NumberInput

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
  },
})
