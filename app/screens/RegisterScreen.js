import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import Screen from "../component/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  ErrorMessage,
  Form,
  AppFormField,
  SubmitButton,
} from "../component/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../component/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={true} />
      <Screen style={styles.container}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <ErrorMessage error={error} visible={true} />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                name="name"
                placeholder="Name"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email"
                name="email"
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
              <SubmitButton title="Register" />
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
