/**
 * TrainingSessionRepository Interface
 * Defines contract for training session persistence.
 */
import { TrainingSession } from '../entities/TrainingSession';

export interface TrainingSessionRepository {
  findById(id: string): Promise<TrainingSession | null>;
  findAll(): Promise<TrainingSession[]>;
  save(session: TrainingSession): Promise<void>;
  update(session: TrainingSession): Promise<void>;
  delete(id: string): Promise<void>;
}
