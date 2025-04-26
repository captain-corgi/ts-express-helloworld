/**
 * EmployeeName Value Object
 * Represents a validated employee name.
 */
export class EmployeeName {
  constructor(public readonly value: string) {
    if (!value || value.trim().length < 2) {
      throw new Error('Employee name must be at least 2 characters long.');
    }
  }
}
