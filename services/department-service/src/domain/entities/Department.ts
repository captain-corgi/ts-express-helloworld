/**
 * Department Entity
 * Represents a department in the organization.
 */
export class Department {
  constructor(
    public readonly id: string,
    public name: string,
    public managerId: string
  ) {}
}
