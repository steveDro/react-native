import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";

import Screen from "./app/component/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/list/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppInputText from "./app/component/AppInputText";
import { Switch } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppFormPicker from "./app/component/forms/AppFormPicker";
import { useFormikContext } from "formik";
import { AppFormField } from "./app/component/forms";
import ListEditScreen from "./app/screens/ListEditScreen";
import AppImagePicker from "./app/component/device_features/ImagePicker";

import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  handleRemove = (uri) => {
    console.log(uri);
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <ListEditScreen />
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd} // {(uri) => handleAdd(uri)}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
  );

  // <ListEditScreen />;
}
