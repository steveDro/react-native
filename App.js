import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import { AsyncStorage } from "react-native";
import OfflineNotice from "./app/component/OfflineNotice";

export default function App() {
  // NetInfo.fetch().then((netinfo) => console.log("using fetch", netinfo));

  // in class component - componentDidMount, function component - useNetInfo()
  // const unsubscribe = NetInfo.addEventListener((netinfo) =>
  //   console.log("using listener", netinfo)
  // );

  // const netInfo = useNetInfo();

  //componentWillMount
  // unsubscribe();

  // const demo = async () => {
  //   AsyncStorage.setItem("person", { id: 1 });
  //   const result = await AsyncStorage.getItem("person");
  //   const person = JSON.parse(result);
  //   console.log(person);
  // };

  // demo();
  // return null;
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigation /> */}
        {/* <TabNavigation /> */}
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );

  // <ListEditScreen />;
}
