/**
 * TrainingSessionController
 * Handles HTTP requests for training session operations.
 */
import { Request, Response } from 'express';
import { ScheduleTrainingSessionUseCase } from '../../application/use-cases/ScheduleTrainingSessionUseCase';

export class TrainingSessionController {
  constructor(private readonly scheduleTrainingSessionUseCase: ScheduleTrainingSessionUseCase) {}

  async schedule(req: Request, res: Response) {
    try {
      const { title, startsAt, capacity } = req.body;
      const session = await this.scheduleTrainingSessionUseCase.execute({ title, startsAt, capacity });
      res.status(201).json(session);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
