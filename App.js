import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

// export default function App() {
//   const Tab = createBottomTabNavigator();
//   const TabNavigation = () => {
//     return (
//       <Tab.Navigator
//         tabBarOptions={{
//           activeBackgroundColor: "tomato",
//           activeTintColor: "white",
//           inactiveBackgroundColor: "#eee",
//           inactiveTintColor: "black",
//         }}
//       >
//         <Tab.Screen
//           name="Tweets"
//           component={StackNavigation}
//           options={{
//             tabBarIcon: ({ size, color }) => (
//               <MaterialCommunityIcons name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen name="Account" component={Account} />
//       </Tab.Navigator>
//     );
//   };
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigation /> */}
      {/* <TabNavigation /> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
  //}
  // <ListEditScreen />;
}
