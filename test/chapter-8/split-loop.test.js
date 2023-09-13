import { describe, it, expect } from '@jest/globals';
import { calculateStats } from '../../src/chapter-8/split-loop';
describe('calculateStats', () => {
  it('should return stats', () => {
    const people = [
      { age: 10, salary: 100 },
      { age: 20, salary: 200 },
      { age: 30, salary: 300 },
    ];
    const stats = calculateStats(people);
    expect(stats).toBe('youngestAge: 10, totalSalary: 600');
  });
});
