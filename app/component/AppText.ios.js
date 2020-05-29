import React from "react";
import { Text, StyleSheet } from "react-native";

// object destructuring from props
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 100,
    fontFamily: "Avenir",
  },
});

export default AppText;
