export enum NotificationType {
  OK,
  ERROR,
}

export type NotificationOptions = {
  type?: NotificationType;
  message: string;
  description?: string;
};
