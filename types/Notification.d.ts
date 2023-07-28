export interface NotificationStructure {
  title: string;
  message: string;
  status: "pending" | "success" | "error";
}

export interface NotificationContextStructure {
  notification: NotificationStructure | null;
  showNotification(notificationData: NotificationStructure): void;
  hideNotification(): void;
}
