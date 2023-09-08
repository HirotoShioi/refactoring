import { describe, it, expect } from '@jest/globals';
import { Order } from '../../src/chapter-7/replace-temp-with-query';

describe('Order', () => {
  it('should return price', () => {
    const order = new Order(10, { price: 100 });
    expect(order.price).toBe(980);
  });
  it('should return price with discount', () => {
    const order = new Order(100, { price: 10 });
    expect(order.price).toBe(980);
  });
  it('should return discount factor', () => {
    const order = new Order(100, { price: 10 });
    expect(order.discountFactor).toBe(0.98);
  });
  it('should return base price', () => {
    const order = new Order(100, { price: 10 });
    expect(order.basePrice).toBe(1000);
  });
});
