import {
  NotificationContextStructure,
  NotificationStructure,
} from "@/types/Notification";
import { createContext, useState } from "react";

const NotificationContext = createContext({} as NotificationContextStructure);

export function NotificationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNotification, setActiveNotification] = useState(
    null as null | NotificationStructure
  );

  const showNotificationHandler: NotificationContextStructure["showNotification"] =
    (notificationData) => {
      setActiveNotification(notificationData);
    };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
