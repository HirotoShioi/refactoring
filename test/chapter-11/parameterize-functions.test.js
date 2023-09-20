import { describe, expect, it } from '@jest/globals';
import { baseCharge } from '../../src/chapter-11/parameterize-functions';

describe('baseCharge', () => {
  it('returns the base charge', () => {
    const result = baseCharge(100);
    expect(result).toBe('$0.03');
  });
  it('returns the base charge', () => {
    const result = baseCharge(200);
    expect(result).toBe('$0.08');
  });
});
