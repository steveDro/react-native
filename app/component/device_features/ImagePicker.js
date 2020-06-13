import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

function AppImagePicker(props) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    // if (!granted) Alert("You need to enable permissions to access this app");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result);
    } catch (error) {
      console.log("error image upload", error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppImagePicker;
