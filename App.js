import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"
import EnterUrlScreen from "./Components/EnterUrlScreen"

export default function App() {
  const [url, setUrl] = useState("")
  const [urlConfirmed, setUrlConfirmed] = useState("")

  const onChangeTextUrl = inputText => {
    setUrl(inputText)
  }

  const confirmUrl = () => {
    setUrlConfirmed(url)
  }

  let content // TODO: change content to next screen on setUrlEntered(true)
  content = (
    <EnterUrlScreen
      onChangeTextUrl={onChangeTextUrl}
      confirmUrl={confirmUrl}
      urlConfirmed={urlConfirmed}
    />
  )

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {content}
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})
