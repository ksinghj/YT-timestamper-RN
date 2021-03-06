import React from "react"
import { StyleSheet, Button, View } from "react-native"
import colors from "../constants/colors"

const MyButton = ({ style, title, handlePress, handlePressParam }) => (
  <View style={{ ...styles.btnContainer, ...style }}>
    <Button
      style={styles.btn}
      color={colors.ytRed}
      title={title}
      onPress={() => handlePress(handlePressParam)}
    />
  </View>
)

export default MyButton

const styles = StyleSheet.create({
  btnContainer: {
    color: "white",
    borderRadius: 5,
    maxWidth: "50%",
    alignSelf: "center",
  },
  btn: {
    color: "red",
  },
})
