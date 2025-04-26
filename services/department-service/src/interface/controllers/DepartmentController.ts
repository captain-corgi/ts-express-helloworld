/**
 * DepartmentController
 * Handles HTTP requests for department operations.
 */
import { Request, Response } from 'express';
import { AssignDepartmentUseCase } from '../../application/use-cases/AssignDepartmentUseCase';

export class DepartmentController {
  constructor(private readonly assignDepartmentUseCase: AssignDepartmentUseCase) {}

  async assign(req: Request, res: Response) {
    try {
      const { departmentId, employeeId, assignedAt } = req.body;
      const assignment = await this.assignDepartmentUseCase.execute({ departmentId, employeeId, assignedAt });
      res.status(201).json(assignment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
