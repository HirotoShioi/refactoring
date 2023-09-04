import {
  defaultOwner,
  setDefaultOwner,
} from '../../src/chapter-6/variable-encapsulation';
import { describe, expect, it } from '@jest/globals';

describe('defaultOwner', () => {
  it('should return default owner', () => {
    const result = defaultOwner();
    const expected = { firstName: 'Martin', lastName: 'Fowler' };
    expect(result.firstName).toEqual(expected.firstName);
    expect(result.lastName).toEqual(expected.lastName);
  });
  it('should return new default owner', () => {
    const newDefaultOwner = { firstName: 'Rebecca', lastName: 'Parsons' };
    setDefaultOwner(newDefaultOwner);
    const result = defaultOwner();
    const expected = { firstName: 'Rebecca', lastName: 'Parsons' };
    expect(result.firstName).toEqual(expected.firstName);
    expect(result.lastName).toEqual(expected.lastName);
  });
});
