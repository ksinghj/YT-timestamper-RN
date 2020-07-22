import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"
import Form from "./Form"
import MyButton from "./MyButton"

const EnterUrlScreen = ({ onChangeTextUrl, setUrlConfirmed, url }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Image source={require("../img/minifyme-logo.png")} style={styles.logo} />
        </View>
        <Form onChangeTextUrl={onChangeTextUrl} />
        <View style={styles.btnContainer}>
          <Text>{url}</Text>
          <MyButton style={{ width: "50%" }} handlePress={setUrlConfirmed} title="ADD" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default EnterUrlScreen

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
