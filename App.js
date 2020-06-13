import React, { useState, useEffect } from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/component/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

// using props - {navigation}
const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View tweet details"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
      {/* child component */}
      <Links />
    </Screen>
  );
};
// using hooks - useNavigation() for child components
const Links = () => {
  const navigation = useNavigation();
  return (
    <Button title="click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};
const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>TweetDetails {route.params.id}</Text>
    </Screen>
  );
};

const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        // options={{ title: "Tweet Details" }}
        options={({ route }) => ({ title: route.params.id })} // setting titles dynamically
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Tweets"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigation /> */}
      {/* <TabNavigation /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );

  // <ListEditScreen />;
}
