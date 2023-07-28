import { useContext } from "react";
import Header from "./Header";
import Notification from "@/components/UI/Notification";
import NotificationContext from "@/store/notification-context";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <Header />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Main;
