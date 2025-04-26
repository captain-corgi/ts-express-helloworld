/**
 * TrainingSession Entity
 * Represents a training session for new employees.
 */
export class TrainingSession {
  constructor(
    public readonly id: string,
    public title: string,
    public startsAt: Date,
    public capacity: number
  ) {}
}
