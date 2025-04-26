import { RegisterEmployeeUseCase } from '../../src/application/use-cases/RegisterEmployeeUseCase';
import { InMemoryEmployeeRepository } from '../../src/infrastructure/database/repositories/InMemoryEmployeeRepository';

describe('RegisterEmployeeUseCase', () => {
  it('registers a valid employee', async () => {
    const repo = new InMemoryEmployeeRepository();
    const useCase = new RegisterEmployeeUseCase(repo);
    const result = await useCase.execute({ name: 'Alice', email: 'alice@email.com', startDate: new Date() });
    expect(result.isSuccess).toBe(true);
    if (result.isSuccess) {
      expect(result.value.name).toBe('Alice');
      expect(result.value.email).toBe('alice@email.com');
      expect(result.value.status).toBe('PENDING');
    } else {
      fail('Expected result to be success');
    }
  });
});
