import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/component/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name="email" size={40} color="dodgerblue" />
      <AppText>This is encapsulated text</AppText>
      <Text
        style={{
          fontFamily: "Courier",
          fontSize: 30,
          fontWeight: "600",
          color: "tomato",
          fontStyle: "italic",
          textTransform: "capitalize",
          textAlign: "justify",
          lineHeight: 25,
        }}
      >
        I love react native. This is first my time programming in react
      </Text>
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          shadowColor: "grey",
          shadowOpacity: 1,
          shadowRadius: 20,
          shadowOffset: { width: 10, height: 10 },
          // borderWidth: 10,
          // borderColor: "royalblue",
          // // borderTopWidth: 20,
          // borderRadius: 50,
        }}
      ></View>
    </View>
  );
}
