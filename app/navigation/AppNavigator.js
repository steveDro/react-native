import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditScreen from "../screens/ListEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import navigation from "./rootNavigation";
import expoPushTokenApi from "../api/expoPushTokens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotification();

    Notifications.addListener((notification) => navigation.navigate("Account"));
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feeds"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListEditScreen}
        options={{
          //   tabBarButton: () => <NewListingButton />,
          title: "Listings",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
