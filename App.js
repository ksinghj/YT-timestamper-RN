// import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from "react-native"
import EnterUrlScreen from "./Components/EnterUrlScreen"
import AddTimestampScreen from "./Components/AddTimestampScreen"
import StampedURL from "./Components/StampedURL"

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
    content = (
      <React.Fragment>
        <EnterUrlScreen
          onChangeTextUrl={onChangeTextUrl}
          confirmUrl={confirmUrl}
          setUrlConfirmed={setUrlConfirmed}
        />
        <AddTimestampScreen />
        <StampedURL url={url} />
      </React.Fragment>
    )
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
