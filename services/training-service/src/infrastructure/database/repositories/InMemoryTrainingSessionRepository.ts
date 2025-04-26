/**
 * InMemoryTrainingSessionRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { TrainingSession } from '../../../domain/entities/TrainingSession';
import { TrainingSessionRepository } from '../../../domain/repositories/TrainingSessionRepository';

export class InMemoryTrainingSessionRepository implements TrainingSessionRepository {
  private sessions = new Map<string, TrainingSession>();

  async findById(id: string): Promise<TrainingSession | null> {
    return this.sessions.get(id) || null;
  }

  async save(session: TrainingSession): Promise<void> {
    this.sessions.set(session.id, session);
  }

  async update(session: TrainingSession): Promise<void> {
    this.sessions.set(session.id, session);
  }

  async delete(id: string): Promise<void> {
    this.sessions.delete(id);
  }
}
