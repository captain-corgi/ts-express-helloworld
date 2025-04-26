/**
 * EmployeeController
 * Handles HTTP requests for employee operations.
 */
import { Request, Response, NextFunction } from 'express';
import { RegisterEmployeeUseCase } from '../../application/use-cases/RegisterEmployeeUseCase';

export class EmployeeController {
  constructor(private readonly registerEmployeeUseCase: RegisterEmployeeUseCase) {}

  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, email, startDate } = req.body;
    const result = await this.registerEmployeeUseCase.execute({ name, email, startDate: new Date(startDate) });
    if (result.isSuccess) {
      res.status(201).json(result.value);
    } else {
      next(result); // Pass error to errorHandler
    }
  }
}
