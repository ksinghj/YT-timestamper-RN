// Formik x React Native example
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

export function Form() {
  return (
    <Formik
      initialValues={{ url: "" }}
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
  );
}
