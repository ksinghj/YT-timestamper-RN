import React from "react"
import { Text, StyleSheet, View } from "react-native"

const StampedURL = ({ title, url, hours, minutes, seconds }) => {
  let URL = `${url}&t=${hours}h${minutes}m${seconds}s`

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.label]}>Your timestamp:</Text>
      <Text style={{ ...styles.title, ...styles.text }}>{title}</Text>
      <Text style={styles.text}>{URL}</Text>
    </View>
  )
  // TODO: make copy to clipboard easy, onpress copy to clipboard with toast
  // Clipboard api not available in Expo SDK as of writing
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "column",
  },
  label: {
    marginBottom: 20,
    fontSize: 24,
  },
  title: {
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
})

export default StampedURL
