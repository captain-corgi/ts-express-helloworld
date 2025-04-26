/**
 * Notification Entity
 * Represents a notification or reminder event.
 */
export class Notification {
  constructor(
    public readonly id: string,
    public eventType: NotificationEventType,
    public payload: any,
    public sentAt: Date
  ) {}
}

export enum NotificationEventType {
  TASK_REMINDER = 'TASK_REMINDER',
  DOCUMENT_REJECTED = 'DOCUMENT_REJECTED',
  TRAINING_REMINDER = 'TRAINING_REMINDER',
  WELCOME_EMAIL = 'WELCOME_EMAIL'
}
