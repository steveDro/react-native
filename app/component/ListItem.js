import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
