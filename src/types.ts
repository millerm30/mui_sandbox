export enum Channels {
  EMAIL = 'EMAIL',
  INAPP_WEB = 'INAPP_WEB',
  WEB_PUSH = 'WEB_PUSH',
  PUSH = 'PUSH',
  SMS = 'SMS',
  CALL = 'CALL',
}

export interface NotificationData {
  id: number;
  notificationId: string;
  title: string;
  enabled?: boolean;
  channels: Channels[];
}

export interface NotificationCardProps {
  notificationId: string;
  title: string;
  enabled?: boolean;
  channels: Channels[];
  deduplication?: boolean;
}
