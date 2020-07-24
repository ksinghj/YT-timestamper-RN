import React from "react"
import { Text, StyleSheet, View } from "react-native"

const StampedURL = ({ title, url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.url}>{title}:</Text>
      <Text>{url}</Text>
    </View>
  )
  // TODO: make copy to clipboard easy
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    flexDirection: "column",
  },
})

export default StampedURL
