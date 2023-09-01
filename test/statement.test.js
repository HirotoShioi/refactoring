import { describe, expect, test } from '@jest/globals';
import { invoice, statement, plays } from '../src/statement';

describe('statement', () => {
  test('should return statement for BigCo', () => {
    const result = statement(invoice[0], plays);
    const lines = result.split('\n');
    expect(lines[0]).toBe('Statement for BigCo');
    expect(lines[1]).toBe(' Hamlet: $650.00 (55 seats)');
    expect(lines[2]).toBe(' As You Like It: $580.00 (35 seats)');
    expect(lines[3]).toBe(' Othello: $500.00 (40 seats)');
    expect(lines[4]).toBe('Amount owed is $1,730.00');
    expect(lines[5]).toBe('You earned 47 credits');
  });
});
