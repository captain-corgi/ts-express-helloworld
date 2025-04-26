/**
 * DepartmentName Value Object
 * Represents a validated department name.
 */
export class DepartmentName {
  constructor(public readonly value: string) {
    if (!value || value.trim().length < 2) {
      throw new Error('Department name must be at least 2 characters long.');
    }
  }
}
