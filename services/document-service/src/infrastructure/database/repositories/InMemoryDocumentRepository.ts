/**
 * InMemoryDocumentRepository
 * Simple in-memory implementation for demonstration/testing.
 */
import { Document } from '../../../domain/entities/Document';
import { DocumentRepository } from '../../../domain/repositories/DocumentRepository';

export class InMemoryDocumentRepository implements DocumentRepository {
  private documents = new Map<string, Document>();

  async findById(id: string): Promise<Document | null> {
    return this.documents.get(id) || null;
  }

  async findByEmployeeId(employeeId: string): Promise<Document[]> {
    return Array.from(this.documents.values()).filter(doc => doc.employeeId === employeeId);
  }

  async save(document: Document): Promise<void> {
    this.documents.set(document.id, document);
  }

  async update(document: Document): Promise<void> {
    this.documents.set(document.id, document);
  }

  async delete(id: string): Promise<void> {
    this.documents.delete(id);
  }
}
