import { Router } from 'express';
import { TrainingSessionController } from '../controllers/TrainingSessionController';
import { ScheduleTrainingSessionUseCase } from '../../application/use-cases/ScheduleTrainingSessionUseCase';
import { InMemoryTrainingSessionRepository } from '../../infrastructure/database/repositories/InMemoryTrainingSessionRepository';

const router = Router();
const trainingSessionRepository = new InMemoryTrainingSessionRepository();
const scheduleTrainingSessionUseCase = new ScheduleTrainingSessionUseCase(trainingSessionRepository);
const controller = new TrainingSessionController(scheduleTrainingSessionUseCase);

router.post('/sessions', (req, res) => controller.schedule(req, res));

export default router;
