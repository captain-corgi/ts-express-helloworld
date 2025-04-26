/**
 * EmployeeRepository Interface
 * Defines contract for employee persistence.
 */
import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  findById(id: string): Promise<Employee | null>;
  findByEmail(email: string): Promise<Employee | null>;
  save(employee: Employee): Promise<void>;
  update(employee: Employee): Promise<void>;
  delete(id: string): Promise<void>;
}
