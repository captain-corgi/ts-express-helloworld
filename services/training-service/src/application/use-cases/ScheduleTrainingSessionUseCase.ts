/**
 * ScheduleTrainingSessionUseCase
 * Handles scheduling a new training session.
 */
import { TrainingSessionRepository } from '../../domain/repositories/TrainingSessionRepository';
import { TrainingSession } from '../../domain/entities/TrainingSession';
import { SessionTitle } from '../../domain/value-objects/SessionTitle';
import { v4 as uuidv4 } from 'uuid';

export class ScheduleTrainingSessionUseCase {
  constructor(private readonly trainingSessionRepository: TrainingSessionRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { title: string; startsAt: Date; capacity: number }): Promise<TrainingSession> {
    const title = new SessionTitle(input.title);
    const session = new TrainingSession(
      this.generateId(),
      title.value,
      input.startsAt,
      input.capacity
    );
    await this.trainingSessionRepository.save(session);
    return session;
  }
}
