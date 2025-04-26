/**
 * AssignTaskUseCase
 * Handles assigning a new onboarding task to an employee.
 */
import { TaskRepository } from '../../domain/repositories/TaskRepository';
import { OnboardingTask } from '../../domain/entities/OnboardingTask';
import { TaskDescription } from '../../domain/value-objects/TaskDescription';

import { TaskStatus } from '../../domain/entities/OnboardingTask';
import { v4 as uuidv4 } from 'uuid';

export class AssignTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { employeeId: string; description: string; dueDate: Date }): Promise<OnboardingTask> {
    const description = new TaskDescription(input.description);
    const task = new OnboardingTask(
      this.generateId(),
      input.employeeId,
      description.value,
      input.dueDate,
      TaskStatus.PENDING
    );
    await this.taskRepository.save(task);
    return task;
  }
}
