import { describe, expect, it } from '@jest/globals';
import { findMiscreant } from '../../src/chapter-11/separate-query-from-modifier';

describe('findMiscreant', () => {
  it('returns the name of the miscreant', () => {
    const people = ['Don', 'John', 'Kent'];
    const result = findMiscreant(people);
    expect(result).toBe('Don');
  });
});
