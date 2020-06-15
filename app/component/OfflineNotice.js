import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from "./AppText";
import colors from "../config/colors";

import Constants from "expo-constants";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unKnown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection!</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 30,
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: Constants.statusBarHeight,
    zIndex: 1, // brings a component to the top
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
