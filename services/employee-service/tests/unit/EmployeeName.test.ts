import { EmployeeName } from '../../src/domain/value-objects/EmployeeName';

describe('EmployeeName', () => {
  it('accepts valid names', () => {
    expect(new EmployeeName('John Doe').value).toBe('John Doe');
  });
  it('rejects too-short names', () => {
    expect(() => new EmployeeName('J')).toThrow();
  });
});
