/**
 * DocumentRepository Interface
 * Defines contract for document persistence.
 */
import { Document } from '../entities/Document';

export interface DocumentRepository {
  findById(id: string): Promise<Document | null>;
  findByEmployeeId(employeeId: string): Promise<Document[]>;
  save(document: Document): Promise<void>;
  update(document: Document): Promise<void>;
  delete(id: string): Promise<void>;
}
