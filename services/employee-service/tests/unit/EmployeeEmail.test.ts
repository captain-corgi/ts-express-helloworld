import { EmployeeEmail } from '../../src/domain/value-objects/EmployeeEmail';

describe('EmployeeEmail', () => {
  it('accepts valid emails', () => {
    expect(new EmployeeEmail('a@b.com').value).toBe('a@b.com');
  });
  it('rejects invalid emails', () => {
    expect(() => new EmployeeEmail('abc')).toThrow();
  });
});
