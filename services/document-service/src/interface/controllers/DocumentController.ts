/**
 * DocumentController
 * Handles HTTP requests for document operations.
 */
import { Request, Response } from 'express';
import { UploadDocumentUseCase } from '../../application/use-cases/UploadDocumentUseCase';

export class DocumentController {
  constructor(private readonly uploadDocumentUseCase: UploadDocumentUseCase) {}

  async upload(req: Request, res: Response) {
    try {
      const { employeeId, type, url } = req.body;
      const document = await this.uploadDocumentUseCase.execute({ employeeId, type, url });
      res.status(201).json(document);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
