import createStatementData from '../src/createStatementData';
import { invoice, plays } from '../src/data';
import { describe, expect, test } from '@jest/globals';

describe('createStatementData', () => {
  test('should return statementData for BigCo', () => {
    const result = createStatementData(invoice[0], plays);
    const expected = {
      customer: 'BigCo',
      performances: [
        {
          playID: 'hamlet',
          audience: 55,
          play: { name: 'Hamlet', type: 'tragedy' },
          amount: 65000,
          volumeCredits: 25,
        },
        {
          playID: 'as-like',
          audience: 35,
          play: { name: 'As You Like It', type: 'comedy' },
          amount: 58000,
          volumeCredits: 12,
        },
        {
          playID: 'othello',
          audience: 40,
          play: { name: 'Othello', type: 'tragedy' },
          amount: 50000,
          volumeCredits: 10,
        },
      ],
      totalAmount: 173000,
      totalVolumeCredits: 47,
    };
    expect(result).toEqual(expected);
  });
});
