/**
 * TaskRepository Interface
 * Defines contract for onboarding task persistence.
 */
import { OnboardingTask } from '../entities/OnboardingTask';

export interface TaskRepository {
  findById(id: string): Promise<OnboardingTask | null>;
  findByEmployeeId(employeeId: string): Promise<OnboardingTask[]>;
  save(task: OnboardingTask): Promise<void>;
  update(task: OnboardingTask): Promise<void>;
  delete(id: string): Promise<void>;
}
