import { Router } from 'express';
import { EmployeeController } from '../controllers/EmployeeController';
import { RegisterEmployeeUseCase } from '../../application/use-cases/RegisterEmployeeUseCase';
import { InMemoryEmployeeRepository } from '../../infrastructure/database/repositories/InMemoryEmployeeRepository';
import { validateEmployee } from '../middleware/validateEmployee';
import { errorHandler } from '../middleware/errorHandler';

const router = Router();
const employeeRepository = new InMemoryEmployeeRepository();
const registerEmployeeUseCase = new RegisterEmployeeUseCase(employeeRepository);
const controller = new EmployeeController(registerEmployeeUseCase);

router.post('/employees', validateEmployee, (req, res, next) => { controller.register(req, res, next); });
router.use(errorHandler);

export default router;
