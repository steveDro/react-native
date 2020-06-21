import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../component/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../component/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";

// yup form validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const { logIn } = useAuth(); //useContext(authContext);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <ErrorMessage
              error="Invalid email and/or password"
              visible={loginFailed}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              icon="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    margin: 20,
  },
});

export default LoginScreen;
