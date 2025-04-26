/**
 * Result Pattern for functional error handling
 */
export type Result<T, E> = Success<T> | Failure<E>;

export class Success<T> {
  readonly isSuccess: true = true;
  readonly isFailure: false = false;
  constructor(public readonly value: T) {}
}

export class Failure<E> {
  readonly isSuccess: false = false;
  readonly isFailure: true = true;
  constructor(public readonly error: E) {}
}

export function ok<T>(value: T): Result<T, never> {
  return new Success(value);
}

export function fail<E>(error: E): Result<never, E> {
  return new Failure(error);
}
