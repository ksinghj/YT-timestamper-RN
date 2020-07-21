import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button } from "react-native"
import Form from "./Components/Form"
import MyButton from "./Components/MyButton"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Image source={require("./img/minifyme-logo.png")} style={styles.logo} />
      </View>
      <View style={styles.btn}>
        <MyButton style={{ width: "50%" }} onPress="onPress" title="ADD" />
      </View>
    </SafeAreaView>
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
