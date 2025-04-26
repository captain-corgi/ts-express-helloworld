/**
 * Employee Entity
 * Represents a new employee in the onboarding system.
 */
export class Employee {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public startDate: Date,
    public status: EmployeeStatus
  ) {}
}

export enum EmployeeStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  TERMINATED = 'TERMINATED'
}
