import { Router } from 'express';
import { DocumentController } from '../controllers/DocumentController';
import { UploadDocumentUseCase } from '../../application/use-cases/UploadDocumentUseCase';
import { InMemoryDocumentRepository } from '../../infrastructure/database/repositories/InMemoryDocumentRepository';

const router = Router();
const documentRepository = new InMemoryDocumentRepository();
const uploadDocumentUseCase = new UploadDocumentUseCase(documentRepository);
const controller = new DocumentController(uploadDocumentUseCase);

router.post('/documents', (req, res) => controller.upload(req, res));

export default router;
