import { describe, it, expect } from '@jest/globals';
import { Amount, Customer, Account } from '../../src/chapter-8/move-field';

describe('Customer', () => {
  it('should return customer instance', () => {
    const customer = new Customer('Martin', 0.1);
    expect(customer.name).toBe('Martin');
    expect(customer.discountRate).toBe(0.1);
    customer.becomePreferred();
    expect(customer.discountRate).toBe(0.13);
    const amount = new Amount(100);
    expect(amount.value).toBe(100);
    const result = customer.applyDiscount(amount);
    expect(result).toBe(87);
  });
});

describe('Account', () => {
  it('should return account instance', () => {
    const account = new Account('1234', 'current', 0.1);
    expect(account.interestRate).toBe(0.1);
  });
});
