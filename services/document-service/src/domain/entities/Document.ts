/**
 * Document Entity
 * Represents an employee-submitted document for onboarding.
 */
export class Document {
  constructor(
    public readonly id: string,
    public readonly employeeId: string,
    public type: DocumentType,
    public url: string,
    public status: DocumentStatus,
    public reviewedAt?: Date
  ) {}
}

export enum DocumentType {
  ID = 'ID',
  TAX_FORM = 'TAX_FORM',
  CONTRACT = 'CONTRACT',
  OTHER = 'OTHER'
}

export enum DocumentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
