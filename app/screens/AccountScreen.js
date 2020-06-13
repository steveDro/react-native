import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../component/Screen";

import ListItem from "../component/list/ListItem";
import colors from "../config/colors";
import Icon from "../component/Icon";
import ListItemSeparator from "../component/list/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          style={styles.menuItemStyle}
          title="Stephen Akoto"
          subTitle="akotosteven@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              style={styles.menuItemStyle}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View>
        <ListItem
          style={styles.menuItemStyle}
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  menuItemStyle: {
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
