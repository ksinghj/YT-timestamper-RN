import React from "react"
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import Clipboard from "@react-native-community/clipboard"

const StampedURL = ({ title, url, hours, minutes, seconds }) => {
  const fullUrl = (url, hours, minutes, seconds) => `${url}&t=${hours}h${minutes}m${seconds}s`
  const earl = "usomerl"

  const copyToClipboard = () => {
    Clipboard.setString(earl)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.url}>{title}:</Text>
      <Text>
        {url}&t={hours}h{minutes}m{seconds}s
      </Text>
      <TouchableOpacity onPress={() => copyToClipboard()}>
        <Text>Click here to copy to Clipboard</Text>
      </TouchableOpacity>
    </View>
  )
  // TODO: make copy to clipboard easy, onpress copy to clipboard with toast
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    flexDirection: "column",
  },
})

export default StampedURL
