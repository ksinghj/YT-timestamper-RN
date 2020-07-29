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

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const onChangeTextUrl = inputText => {
    setUrl(inputText)
  }

  const confirmUrl = () => {
    setUrlConfirmed(url)
  }

  const onHourChange = hours => {
    console.log("onHourChange hours:", hours)
    setHours(hours)
  }
  const onMinutesChange = minutes => {
    console.log("onMinutesChange hours:", minutes)
    setMinutes(minutes)
  }
  const onSecondsChange = seconds => {
    console.log("onSecondsChange seconds:", seconds)
    setSeconds(seconds)
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
        <AddTimestampScreen
          setTitle={setTitle}
          onHourChange={onHourChange}
          onMinutesChange={onMinutesChange}
          onSecondsChange={onSecondsChange}
        />
        <StampedURL title={title} url={url} hours={hours} minutes={minutes} seconds={seconds} />
      </React.Fragment>
    )
  }

  return (
    // TODO: TouchableWithoutFeedback causing user to press button twice to add url, not good UX
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
