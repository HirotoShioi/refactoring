import {
  NumberRange,
  readingOutsideRange,
  station,
} from '../../src/chapter-6/ parameter-object';
import { describe, expect, it } from '@jest/globals';

describe('readingOutsideRange', () => {
  it('should return reading outside range', () => {
    const range = new NumberRange(50, 55);
    const result = readingOutsideRange(station, range);
    const expected = [
      {
        temp: 47,
        time: '2016-11-10 09:10',
      },
      {
        temp: 58,
        time: '2016-11-10 09:30',
      },
    ];
    expect(result).toEqual(expected);
  });
  it('should return empty array', () => {
    const range = new NumberRange(0, 100);
    const result = readingOutsideRange(station, range);
    const expected = [];
    expect(result).toEqual(expected);
  });
});
