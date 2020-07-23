import React from "react"
import { StyleSheet, View } from "react-native"
import NumericInput from "react-native-numeric-input"

const NumberInput = ({ onChangeHandler }) => (
  <View>
    <NumericInput
      type="up-down"
      onChange={value => console.log(value)}
      minValue={0}
      maxValue={60}
    />
  </View>
)

export default NumberInput

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
})
