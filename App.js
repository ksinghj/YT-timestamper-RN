// import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native"
import EnterUrlScreen from "./Components/EnterUrlScreen"
import AddTimestampScreen from "./Components/AddTimestampScreen"
import StampedURL from "./Components/StampedURL"

export default function App() {
  const [url, setUrl] = useState("")
  const [urlConfirmed, setUrlConfirmed] = useState(false)
  const [title, setTitle] = useState("")

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
        <AddTimestampScreen setTitle={setTitle} />
        <StampedURL title={title} url={url} />
      </React.Fragment>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>{content}</ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
