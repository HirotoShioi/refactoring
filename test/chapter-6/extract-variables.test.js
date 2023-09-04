import { price } from '../../src/chapter-6/extract-variables';
import { describe, expect } from '@jest/globals';

describe('price', () => {
  const order = {
    quantity: 100,
    itemPrice: 100,
  };
  test('should return price', () => {
    const result = price(order);
    // 100 * 100 - 100 * 100 * 0.05 + 100 * 0.1 = 10100
    const expected = 10100;
    expect(result).toEqual(expected);
  });
});
