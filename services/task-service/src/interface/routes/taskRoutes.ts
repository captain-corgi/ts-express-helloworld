import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { AssignTaskUseCase } from '../../application/use-cases/AssignTaskUseCase';
import { InMemoryTaskRepository } from '../../infrastructure/database/repositories/InMemoryTaskRepository';

const router = Router();
const taskRepository = new InMemoryTaskRepository();
const assignTaskUseCase = new AssignTaskUseCase(taskRepository);
const controller = new TaskController(assignTaskUseCase);

router.post('/tasks', (req, res) => controller.assign(req, res));

export default router;
