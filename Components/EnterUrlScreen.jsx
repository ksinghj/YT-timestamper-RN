import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"
import Form from "./Form"
import MyButton from "./MyButton"

// TODO: remove spaces from url!!
// TODO: refactor to class component to use scrollto
const EnterUrlScreen = ({ onChangeTextUrl, setUrlConfirmed }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
          <Image source={require("../img/minifyme-logo.png")} style={styles.logo} />
        </View>
        <Form onChangeHandler={onChangeTextUrl} />
        <View style={styles.btnContainer}>
          <MyButton
            style={{ width: "50%" }}
            handlePress={setUrlConfirmed}
            handlePressParam={true}
            title="ADD"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default EnterUrlScreen

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    marginTop: 5,
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
    marginTop: 20,
    flexDirection: "column",
    alignSelf: "center",
  },
})
