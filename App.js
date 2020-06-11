import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import WelcomScreen from "./app/screens/WelcomScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/Text";
import AppButton from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/TextInput";
import { Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();

  const categories = [
    { label: "Furniture", id: 1 },
    { label: "Books", id: 2 },
    { label: "Cameras", id: 3 },
  ];

  return (
    // <LoginScreen />
    // <Screen>
    /* <ListingEditScreen /> */
    /* <AppTextInput icon="email" placeholder="Username" />
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        placeholder="Category"
        icon="apps"
        items={categories}
      /> */
    // </Screen>
    // <View
    //   style={[
    //     styles.container,
    //     { padding: 0, paddingVertical: 20, marginBottom: 20 },
    //   ]}
    // >
    //   <AccountScreen />
    // </View>
    <MessagesScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreen />
    // <View style={styles.container}>
    //   <Card
    //     title="Red jacket for sale!"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />

    //   <Card
    //     title="Couch for sale!"
    //     subTitle="$1000"
    //     image={require("./app/assets/couch.jpg")}
    //   />
    // </View>
    // <WelcomScreen />
    // <View style={styles.container}>
    //   <View style={styles.shadow}></View>
    //   <AppText>I love react native</AppText>
    //   <AppButton>Login</AppButton>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    borderRadius: 20,
    padding: 20,
  },
  shadow: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
  },
});
