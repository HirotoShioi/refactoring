import { describe, it, expect } from '@jest/globals';
import { Person } from '../../src/chapter-7/extra-class';
describe('Person', () => {
  it('should return person instance', () => {
    const person = new Person({
      name: 'Martin',
      officeAreaCode: '051',
      officeNumber: '12345678',
    });
    expect(person.name).toBe('Martin');
    expect(person.officeAreaCode).toBe('051');
    expect(person.officeNumber).toBe('12345678');
  });
  it('should return telephone number', () => {
    const person = new Person({
      name: 'Martin',
      officeAreaCode: '051',
      officeNumber: '12345678',
    });
    expect(person.telephoneNumber).toBe('(051) 12345678');
  });
  it('should set office area code', () => {
    const person = new Person({
      name: 'Martin',
      officeAreaCode: '051',
      officeNumber: '12345678',
    });
    person.officeAreaCode = '052';
    expect(person.officeAreaCode).toBe('052');
  });
  it('should set office number', () => {
    const person = new Person({
      name: 'Martin',
      officeAreaCode: '051',
      officeNumber: '12345678',
    });
    person.officeNumber = '87654321';
    expect(person.officeNumber).toBe('87654321');
  });
});
