import { Router } from 'express';
import { DepartmentController } from '../controllers/DepartmentController';
import { AssignDepartmentUseCase } from '../../application/use-cases/AssignDepartmentUseCase';
import { InMemoryDepartmentRepository } from '../../infrastructure/database/repositories/InMemoryDepartmentRepository';

const router = Router();
const departmentRepository = new InMemoryDepartmentRepository();
const assignDepartmentUseCase = new AssignDepartmentUseCase(departmentRepository);
const controller = new DepartmentController(assignDepartmentUseCase);

router.post('/assignments', (req, res) => controller.assign(req, res));

export default router;
