import { Router } from 'express';
import { NotificationController } from '../controllers/NotificationController';
import { SendNotificationUseCase } from '../../application/use-cases/SendNotificationUseCase';
import { InMemoryNotificationRepository } from '../../infrastructure/database/repositories/InMemoryNotificationRepository';

const router = Router();
const notificationRepository = new InMemoryNotificationRepository();
const sendNotificationUseCase = new SendNotificationUseCase(notificationRepository);
const controller = new NotificationController(sendNotificationUseCase);

router.post('/notifications', (req, res) => controller.send(req, res));

export default router;
