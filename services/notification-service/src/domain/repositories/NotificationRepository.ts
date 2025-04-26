/**
 * NotificationRepository Interface
 * Defines contract for notification persistence.
 */
import { Notification } from '../entities/Notification';

export interface NotificationRepository {
  findById(id: string): Promise<Notification | null>;
  findByEventType(eventType: string): Promise<Notification[]>;
  save(notification: Notification): Promise<void>;
  delete(id: string): Promise<void>;
}
