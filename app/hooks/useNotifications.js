import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushTokens";

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener) Notifications.addListener(notificationListener);
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
};
