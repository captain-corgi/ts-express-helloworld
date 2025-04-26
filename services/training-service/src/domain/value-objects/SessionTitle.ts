/**
 * SessionTitle Value Object
 * Represents a validated training session title.
 */
export class SessionTitle {
  constructor(public readonly value: string) {
    if (!value || value.trim().length < 3) {
      throw new Error('Session title must be at least 3 characters long.');
    }
  }
}
