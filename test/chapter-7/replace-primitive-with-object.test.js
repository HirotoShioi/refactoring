import { describe, it, expect } from '@jest/globals';
import {
  Order,
  Priority,
} from '../../src/chapter-7/replace-primitive-with-object.js';

describe('Order', () => {
  it('should return priority string', () => {
    const order = new Order({ priority: 'high' });

    expect(order.priorityString).toBe('high');
  });
  it('should create order with priority', () => {
    const order = new Order({ priority: 'high' });
    expect(order.priority).toEqual(new Priority('high'));
  });
  it('should filter priority', () => {
    const orders = [
      new Order({ priority: 'low' }),
      new Order({ priority: 'rush' }),
      new Order({ priority: 'high' }),
      new Order({ priority: 'normal' }),
    ];
    const highPriorityCount = orders.filter((o) =>
      o.priority.higherThan(new Priority('normal')),
    ).length;
    expect(highPriorityCount).toBe(2);
  });
  it('should throw error when order is invalid', () => {
    expect(() => new Order({ priority: 'invalid' })).toThrow(
      '<invalid> is invalid for Priority',
    );
  });
  it('should compare priority', () => {
    const normalPriority = new Priority('normal');
    const highPriority = new Priority('high');
    expect(normalPriority.equals(highPriority)).toBeFalsy();
    expect(normalPriority.higherThan(highPriority)).toBeFalsy();
    expect(normalPriority.lowerThan(highPriority)).toBeTruthy();
  });
});
