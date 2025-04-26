/**
 * PostgresNotificationRepository
 * Infrastructure adapter for PostgreSQL persistence.
 * (Stub - implement actual queries with a DB client like TypeORM, Knex, or pg-promise)
 */
import { Notification } from '../../domain/entities/Notification';
import { NotificationRepository } from '../../domain/repositories/NotificationRepository';

export class PostgresNotificationRepository implements NotificationRepository {
  // Inject DB client/connection here (not shown for brevity)

  async findById(id: string): Promise<Notification | null> {
    // TODO: Implement actual DB query
    return null;
  }

  async save(notification: Notification): Promise<void> {
    // TODO: Implement actual DB insert
  }

  async update(notification: Notification): Promise<void> {
    // TODO: Implement actual DB update
  }

  async delete(id: string): Promise<void> {
    // TODO: Implement actual DB delete
  }
}
