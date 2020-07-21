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
import Form from "./Components/Form"
import MyButton from "./Components/MyButton"

export default function App() {
  const [url, setUrl] = useState("")
  const [urlConfirmed, setUrlConfirmed] = useState("")

  const onChangeText = inputText => {
    setUrl(inputText)
  }

  const confirmUrl = () => {
    setUrlConfirmed(url)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Image source={require("./img/minifyme-logo.png")} style={styles.logo} />
        </View>
        <View>
          <Form onChangeText={onChangeText} />
        </View>
        <View style={styles.btn}>
          <MyButton style={{ width: "50%" }} onPress={confirmUrl} title="ADD" />
          <Text>{urlConfirmed}</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    marginTop: 80,
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
})
