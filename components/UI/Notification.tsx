import NotificationContext from "@/store/notification-context";
import { NotificationStructure } from "@/types/Notification";
import React, { useContext, useEffect } from "react";

const Notification = ({ title, message, status }: NotificationStructure) => {
  const { hideNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (status === "pending") return;
    const timer = setTimeout(() => {
      hideNotification();
    }, 1500);

    return () => clearTimeout(timer);
  }, [hideNotification, status]);

  const bg =
    status === "pending"
      ? "bg-teal-400"
      : status === "success"
      ? "bg-cyan-700"
      : "bg-rose-600";

  return (
    <div
      id="bottom-banner"
      className={`fixed bottom-0 left-0 z-50 flex w-full p-4 py-6  ${bg}`}
    >
      <div className="flex items-center justify-between mx-auto w-full max-w-5xl">
        <p className="font-medium text-lg text-gray-200 dark:text-gray-50">
          {title}
        </p>
        <p className=" font-normal text-gray-300 dark:text-gray-100">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
