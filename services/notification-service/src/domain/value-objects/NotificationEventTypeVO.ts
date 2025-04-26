/**
 * NotificationEventTypeVO Value Object
 * Represents a validated notification event type.
 */
export class NotificationEventTypeVO {
  constructor(public readonly value: string) {
    const allowed = ['TASK_REMINDER', 'DOCUMENT_REJECTED', 'TRAINING_REMINDER', 'WELCOME_EMAIL'];
    if (!allowed.includes(value)) {
      throw new Error('Invalid notification event type.');
    }
  }
}
