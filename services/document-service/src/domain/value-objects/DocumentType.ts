/**
 * DocumentType Value Object
 * Represents the type of document submitted by an employee.
 */
export class DocumentType {
  constructor(public readonly value: string) {
    const allowed = ['ID', 'TAX_FORM', 'CONTRACT', 'OTHER'];
    if (!allowed.includes(value)) {
      throw new Error('Invalid document type.');
    }
  }
}
