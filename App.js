import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from "react-native"
import EnterUrlScreen from "./Components/EnterUrlScreen"

export default function App() {
  const [url, setUrl] = useState("")
  const [urlConfirmed, setUrlConfirmed] = useState(false)

  const onChangeTextUrl = inputText => {
    setUrl(inputText)
  }

  const confirmUrl = () => {
    setUrlConfirmed(url)
  }

  let content
  content = (
    <EnterUrlScreen
      onChangeTextUrl={onChangeTextUrl}
      confirmUrl={confirmUrl}
      setUrlConfirmed={setUrlConfirmed}
      url={url}
    />
  )

  if (urlConfirmed === true) {
    content += <Text>AddTimestampScreen</Text>
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>{content}</View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
