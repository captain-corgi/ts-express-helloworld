/**
 * SendNotificationUseCase
 * Handles sending a notification event.
 */
import { NotificationRepository } from '../../domain/repositories/NotificationRepository';
import { Notification, NotificationEventType } from '../../domain/entities/Notification';
import { NotificationEventTypeVO } from '../../domain/value-objects/NotificationEventTypeVO';

import { v4 as uuidv4 } from 'uuid';

export class SendNotificationUseCase {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { eventType: string; payload: any; sentAt: Date }): Promise<Notification> {
    const eventType = new NotificationEventTypeVO(input.eventType);
    const notification = new Notification(
      this.generateId(),
      input.eventType as NotificationEventType,
      input.payload,
      input.sentAt
    );
    await this.notificationRepository.save(notification);
    return notification;
  }
}
