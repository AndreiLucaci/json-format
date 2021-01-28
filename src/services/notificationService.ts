import { notification } from "antd";
import { ArgsProps as NotificationOptions } from "antd/lib/notification";

export interface INotificationService {
  open(options: NotificationOptions): void;
  error(options: NotificationOptions): void;
}

export class NotificationService implements INotificationService {
  open(options: NotificationOptions): void {
    notification.open({
      placement: "bottomRight",
      ...options,
    });
  }

  error(options: NotificationOptions): void {
    notification.error({
      placement: "bottomRight",
      ...options,
    });
  }
}

export const notificationService: INotificationService = new NotificationService();
