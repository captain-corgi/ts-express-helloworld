/**
 * InMemoryEmployeeRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { Employee } from '../../../domain/entities/Employee';
import { EmployeeRepository } from '../../../domain/repositories/EmployeeRepository';

export class InMemoryEmployeeRepository implements EmployeeRepository {
  private employees = new Map<string, Employee>();

  async findById(id: string): Promise<Employee | null> {
    return this.employees.get(id) || null;
  }

  async findByEmail(email: string): Promise<Employee | null> {
    for (const emp of this.employees.values()) {
      if (emp.email === email) return emp;
    }
    return null;
  }

  async save(employee: Employee): Promise<void> {
    this.employees.set(employee.id, employee);
  }

  async update(employee: Employee): Promise<void> {
    this.employees.set(employee.id, employee);
  }

  async delete(id: string): Promise<void> {
    this.employees.delete(id);
  }
}
