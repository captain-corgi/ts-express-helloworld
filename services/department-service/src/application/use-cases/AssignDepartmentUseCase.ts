/**
 * AssignDepartmentUseCase
 * Handles assigning an employee to a department.
 */
import { DepartmentRepository } from '../../domain/repositories/DepartmentRepository';
import { Assignment } from '../../domain/entities/Assignment';

import { v4 as uuidv4 } from 'uuid';

export class AssignDepartmentUseCase {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { departmentId: string; employeeId: string; assignedAt: Date }): Promise<Assignment> {
    const assignment = new Assignment(
      this.generateId(),
      input.departmentId,
      input.employeeId,
      input.assignedAt
    );
    // (Business rule: Only one department per employee at a time would be enforced at service/repository level)
    await this.departmentRepository.save(assignment as any);
    return assignment;
  }
}
