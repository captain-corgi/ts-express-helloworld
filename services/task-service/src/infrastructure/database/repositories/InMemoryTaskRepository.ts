/**
 * InMemoryTaskRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { OnboardingTask } from '../../../domain/entities/OnboardingTask';
import { TaskRepository } from '../../../domain/repositories/TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
  private tasks = new Map<string, OnboardingTask>();

  async findById(id: string): Promise<OnboardingTask | null> {
    return this.tasks.get(id) || null;
  }

  async findByEmployeeId(employeeId: string): Promise<OnboardingTask[]> {
    return Array.from(this.tasks.values()).filter(task => task.employeeId === employeeId);
  }

  async save(task: OnboardingTask): Promise<void> {
    this.tasks.set(task.id, task);
  }

  async update(task: OnboardingTask): Promise<void> {
    this.tasks.set(task.id, task);
  }

  async delete(id: string): Promise<void> {
    this.tasks.delete(id);
  }
}
