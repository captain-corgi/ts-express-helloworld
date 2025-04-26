/**
 * RegisterEmployeeUseCase
 * Handles registration of a new employee.
 */
import { EmployeeRepository } from '../../domain/repositories/EmployeeRepository';
import { Employee } from '../../domain/entities/Employee';
import { EmployeeName } from '../../domain/value-objects/EmployeeName';
import { EmployeeEmail } from '../../domain/value-objects/EmployeeEmail';
import { EmployeeStatus } from '../../domain/entities/Employee';
import { v4 as uuidv4 } from 'uuid';
import { Result, ok, fail } from '../../../../libs/Result';

export class RegisterEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { name: string; email: string; startDate: Date }): Promise<Result<Employee, string>> {
    try {
      const name = new EmployeeName(input.name);
      const email = new EmployeeEmail(input.email);
      // Enforce unique email
      const existing = await this.employeeRepository.findByEmail(email.value);
      if (existing) {
        return fail('Email already exists');
      }
      const employee = new Employee(
        this.generateId(),
        name.value,
        email.value,
        input.startDate,
        EmployeeStatus.PENDING
      );
      await this.employeeRepository.save(employee);
      return ok(employee);
    } catch (err: any) {
      return fail(err.message || 'Unknown error');
    }
  }
}

