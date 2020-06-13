import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../Icon";
import AppText from "../AppText";
import colors from "../../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    color: colors.medium,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
