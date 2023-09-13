import { describe, it, expect } from '@jest/globals';
import { acquireData } from '../../src/chapter-8/replace-loop';
describe('acquireData', () => {
  it('returns the correct result', () => {
    const input = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;
    const expected = [
      { city: 'Bangalore', phone: '+91 80 4064 9570' },
      { city: 'Chennai', phone: '+91 44 660 44766' },
    ];
    expect(acquireData(input)).toEqual(expected);
  });
  it('returns an empty array if no matches are found', () => {
    const input = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Porto Alegre, Brazil, +55 51 3079 3550`;
    expect(acquireData(input)).toEqual([]);
  });
  it('returns an empty array if the input is empty', () => {
    expect(acquireData('')).toEqual([]);
  });
});
