import { describe, expect, test } from '@jest/globals';
import { invoice, statement, plays, htmlStatement } from '../src/statement';

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

describe('htmlStatement', () => {
  test('should return htmlStatement for BigCo', () => {
    const result = htmlStatement(invoice[0], plays);
    const lines = result.split('\n');
    expect(lines[0]).toBe('<h1>Statement for BigCo</h1>');
    expect(lines[1]).toBe('<table>');
    expect(lines[2]).toBe('<tr><th>play</th><th>seats</th><th>cost</th></tr>');
    expect(lines[3]).toBe(
      ' <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>',
    );
    expect(lines[4]).toBe(
      ' <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>',
    );
    expect(lines[5]).toBe(
      ' <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>',
    );
    expect(lines[6]).toBe('</table>');
    expect(lines[7]).toBe('<p>Amount owed is <em>$1,730.00</em></p>');
    expect(lines[8]).toBe('<p>You earned <em>47</em> credits</p>');
  });
});
