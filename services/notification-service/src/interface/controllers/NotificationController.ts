/**
 * NotificationController
 * Handles HTTP requests for notification operations.
 */
import { Request, Response } from 'express';
import { SendNotificationUseCase } from '../../application/use-cases/SendNotificationUseCase';

export class NotificationController {
  constructor(private readonly sendNotificationUseCase: SendNotificationUseCase) {}

  async send(req: Request, res: Response) {
    try {
      const { eventType, payload, sentAt } = req.body;
      const notification = await this.sendNotificationUseCase.execute({ eventType, payload, sentAt });
      res.status(201).json(notification);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
