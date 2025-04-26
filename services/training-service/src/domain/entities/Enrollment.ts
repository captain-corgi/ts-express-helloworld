/**
 * Enrollment Entity
 * Represents an employee's enrollment in a training session.
 */
export class Enrollment {
  constructor(
    public readonly id: string,
    public readonly sessionId: string,
    public readonly employeeId: string,
    public status: EnrollmentStatus
  ) {}
}

export enum EnrollmentStatus {
  ENROLLED = 'ENROLLED',
  CANCELLED = 'CANCELLED',
  ATTENDED = 'ATTENDED',
  NO_SHOW = 'NO_SHOW'
}
