import { describe, expect, test } from '@jest/globals';
import { priceOrder } from '../../src/chapter-6/split-phase';
describe('priceOrder', () => {
  it('should return price', () => {
    const product = {
      basePrice: 10,
      discountRate: 0.1,
      discountThreshold: 2,
    };
    const quantity = 2;
    const shippingMethod = {
      feePerCase: 5,
      discountThreshold: 2,
      discountedFee: 3,
    };
    const price = priceOrder(product, quantity, shippingMethod);
    expect(price).toBe(26);
  });
  it('should return price', () => {
    const product = {
      basePrice: 10,
      discountRate: 0.1,
      discountThreshold: 2,
    };
    const quantity = 3;
    const shippingMethod = {
      feePerCase: 5,
      discountThreshold: 2,
      discountedFee: 3,
    };
    const price = priceOrder(product, quantity, shippingMethod);
    expect(price).toBe(38);
  });
});
