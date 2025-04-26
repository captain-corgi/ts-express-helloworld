/**
 * Assignment Entity
 * Represents the assignment of an employee to a department.
 */
export class Assignment {
  constructor(
    public readonly id: string,
    public readonly departmentId: string,
    public readonly employeeId: string,
    public assignedAt: Date
  ) {}
}
