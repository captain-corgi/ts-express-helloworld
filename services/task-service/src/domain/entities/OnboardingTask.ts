/**
 * OnboardingTask Entity
 * Represents a task assigned to an employee during onboarding.
 */
export class OnboardingTask {
  constructor(
    public readonly id: string,
    public readonly employeeId: string,
    public description: string,
    public dueDate: Date,
    public status: TaskStatus
  ) {}
}

export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  OVERDUE = 'OVERDUE'
}
