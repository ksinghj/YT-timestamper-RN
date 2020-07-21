import React from "react"
import { StyleSheet, Button, View } from "react-native"
import colors from "../constants/colors"

const MyButton = ({ style, title, onPress }) => (
  <View style={{ ...styles.btnContainer, ...style }}>
    <Button style={styles.btn} color={colors.ytRed} onPress={onPress} title={title} />
  </View>
)

export default MyButton

const styles = StyleSheet.create({
  btnContainer: {
    color: "white",
    padding: 30,
    borderRadius: 5,
    maxWidth: "50%",
    alignSelf: "center",
  },
  btn: {
    color: "red",
  },
})
