import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Constant from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight, // Platform code
    flex: 1,
  },
});

export default Screen;
