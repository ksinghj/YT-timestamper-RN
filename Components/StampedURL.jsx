import React from "react"
import { Text, StyleSheet, View } from "react-native"

const StampedURL = ({ title, url, hours, minutes, seconds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.url}>{title}:</Text>
      <Text>
        {url}&t={hours}h{minutes}m{seconds}s
      </Text>
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
