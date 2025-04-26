/**
 * PostgresTrainingSessionRepository
 * Infrastructure adapter for PostgreSQL persistence.
 * (Stub - implement actual queries with a DB client like TypeORM, Knex, or pg-promise)
 */
import { TrainingSession } from '../../domain/entities/TrainingSession';
import { TrainingSessionRepository } from '../../domain/repositories/TrainingSessionRepository';

export class PostgresTrainingSessionRepository implements TrainingSessionRepository {
  // Inject DB client/connection here (not shown for brevity)

  async findById(id: string): Promise<TrainingSession | null> {
    // TODO: Implement actual DB query
    return null;
  }

  async save(session: TrainingSession): Promise<void> {
    // TODO: Implement actual DB insert
  }

  async update(session: TrainingSession): Promise<void> {
    // TODO: Implement actual DB update
  }

  async delete(id: string): Promise<void> {
    // TODO: Implement actual DB delete
  }
}
