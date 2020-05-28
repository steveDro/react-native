import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello react native</Text>
      <Button title="Click Me!" onPress={() => console.log("Clicked")} />
      <Button title="Click Me 2!" onPress={() => alert("Clicked")} />
      <Button
        title="Click Me 3!"
        // onPress={() =>
        //   Alert.alert("Alert", "You clicked Me", [
        //     {
        //       text: "Yes",
        //       onPress: () => Alert.alert("Yes clicked", "Why did u click me!"),
        //     },
        //     { text: "No" },
        //   ])
        // }
        onPress={() =>
          Alert.prompt("Prompt", "Message", (text) => console.log(text))
        }
      />
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback> */}
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      {/* <image source={{ uri: "https://picsum.photos/200/300" }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
