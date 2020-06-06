import React, { useState } from "react";

import Screen from "./app/component/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppInputText from "./app/component/AppInputText";
import { Switch } from "react-native";
import AppPicker from "./app/component/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppFormPicker from "./app/component/forms/AppFormPicker";
import { useFormikContext } from "formik";
import { AppFormField } from "./app/component/forms";
import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  return <ListEditScreen />;
}
