/**
 * TaskDescription Value Object
 * Represents a validated onboarding task description.
 */
export class TaskDescription {
  constructor(public readonly value: string) {
    if (!value || value.trim().length < 5) {
      throw new Error('Task description must be at least 5 characters long.');
    }
  }
}
