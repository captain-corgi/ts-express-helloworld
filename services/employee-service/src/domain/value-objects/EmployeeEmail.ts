/**
 * EmployeeEmail Value Object
 * Represents a validated employee email address.
 */
export class EmployeeEmail {
  constructor(public readonly value: string) {
    // Simple email regex for demonstration
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      throw new Error('Invalid employee email address.');
    }
  }
}
