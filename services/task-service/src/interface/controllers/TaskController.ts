/**
 * TaskController
 * Handles HTTP requests for onboarding task operations.
 */
import { Request, Response } from 'express';
import { AssignTaskUseCase } from '../../application/use-cases/AssignTaskUseCase';

export class TaskController {
  constructor(private readonly assignTaskUseCase: AssignTaskUseCase) {}

  async assign(req: Request, res: Response) {
    try {
      const { employeeId, description, dueDate } = req.body;
      const task = await this.assignTaskUseCase.execute({ employeeId, description, dueDate });
      res.status(201).json(task);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
