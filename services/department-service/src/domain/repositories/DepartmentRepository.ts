/**
 * DepartmentRepository Interface
 * Defines contract for department persistence.
 */
import { Department } from '../entities/Department';

export interface DepartmentRepository {
  findById(id: string): Promise<Department | null>;
  findByManagerId(managerId: string): Promise<Department[]>;
  save(department: Department): Promise<void>;
  update(department: Department): Promise<void>;
  delete(id: string): Promise<void>;
}
