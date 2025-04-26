/**
 * UploadDocumentUseCase
 * Handles uploading a document for an employee.
 */
import { DocumentRepository } from '../../domain/repositories/DocumentRepository';
import { Document } from '../../domain/entities/Document';
import { DocumentType } from '../../domain/value-objects/DocumentType';

import { DocumentStatus } from '../../domain/entities/Document';
import { v4 as uuidv4 } from 'uuid';

export class UploadDocumentUseCase {
  constructor(private readonly documentRepository: DocumentRepository) {}

  private generateId(): string {
    return uuidv4();
  }

  async execute(input: { employeeId: string; type: string; url: string }): Promise<Document> {
    const type = new DocumentType(input.type);
    const document = new Document(
      this.generateId(),
      input.employeeId,
      type.value,
      input.url,
      DocumentStatus.PENDING
    );
    await this.documentRepository.save(document);
    return document;
  }
}
