/**
 * InMemoryNotificationRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { Notification } from '../../../domain/entities/Notification';
import { NotificationRepository } from '../../../domain/repositories/NotificationRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  private notifications = new Map<string, Notification>();

  async findById(id: string): Promise<Notification | null> {
    return this.notifications.get(id) || null;
  }

  async save(notification: Notification): Promise<void> {
    this.notifications.set(notification.id, notification);
  }

  async update(notification: Notification): Promise<void> {
    this.notifications.set(notification.id, notification);
  }

  async delete(id: string): Promise<void> {
    this.notifications.delete(id);
  }
}
