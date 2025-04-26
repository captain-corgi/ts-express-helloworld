/**
 * InMemoryDepartmentRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { Assignment } from '../../../domain/entities/Assignment';
import { DepartmentRepository } from '../../../domain/repositories/DepartmentRepository';

export class InMemoryDepartmentRepository implements DepartmentRepository {
  private assignments = new Map<string, Assignment>();

  async findAssignmentById(id: string): Promise<Assignment | null> {
    return this.assignments.get(id) || null;
  }

  async findAssignmentsByDepartment(departmentId: string): Promise<Assignment[]> {
    return Array.from(this.assignments.values()).filter(a => a.departmentId === departmentId);
  }

  async saveAssignment(assignment: Assignment): Promise<void> {
    this.assignments.set(assignment.id, assignment);
  }

  async updateAssignment(assignment: Assignment): Promise<void> {
    this.assignments.set(assignment.id, assignment);
  }

  async deleteAssignment(id: string): Promise<void> {
    this.assignments.delete(id);
  }
}
