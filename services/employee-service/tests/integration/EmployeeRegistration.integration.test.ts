import request from 'supertest';
import express from 'express';
import { EmployeeController } from '../../src/interface/controllers/EmployeeController';
import { RegisterEmployeeUseCase } from '../../src/application/use-cases/RegisterEmployeeUseCase';
import { InMemoryEmployeeRepository } from '../../src/infrastructure/database/repositories/InMemoryEmployeeRepository';
import { validateEmployee } from '../../src/interface/middleware/validateEmployee';
import { errorHandler } from '../../src/interface/middleware/errorHandler';

describe('Employee Registration Integration', () => {
  const app = express();
  app.use(express.json());
  const repo = new InMemoryEmployeeRepository();
  const useCase = new RegisterEmployeeUseCase(repo);
  const controller = new EmployeeController(useCase);

  app.post('/api/employees', validateEmployee, (req, res, next) => { controller.register(req, res, next); });
  app.use(errorHandler);

  it('registers a new employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({ name: 'Bob', email: 'bob@email.com', startDate: '2025-05-01' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Bob');
    expect(res.body.email).toBe('bob@email.com');
  });

  it('rejects duplicate email', async () => {
    await request(app)
      .post('/api/employees')
      .send({ name: 'Bob', email: 'bob@email.com', startDate: '2025-05-01' });
    const res = await request(app)
      .post('/api/employees')
      .send({ name: 'Another', email: 'bob@email.com', startDate: '2025-05-02' });
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/Email already exists/);
  });
});
