import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
// import Form from "./Components/Form";
import { Formik } from "formik";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={require("./img/minifyme-logo.png")}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{ url: "" }} // Want this as Form component for reuse
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("url")}
              onBlur={handleBlur("url")}
              value={values.url}
            />
            <Button onPress={handleSubmit} title="Add" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    marginTop: 80,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});
