import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/component/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import { Button } from "react-native";
import { Notifications } from "expo";
import Screen from "./app/component/Screen";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  logger.log(new Error("error in app"));
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  const showNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Congratulations",
        body: "Your order was successfully placed.",
        data: {
          _displayInForeground: true,
        },
      },
      {
        time: new Date().getTime() + 6000,
      }
    );
  };

  return (
    // <Screen>
    //   <Button title="click me" onPress={showNotification} />
    // </Screen>
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
