import { inNewEngland } from '../../src/chapter-6/modifying-function-declaration';
import { describe, expect, it } from '@jest/globals';
describe('inNewEngland', () => {
  const customers = [
    { address: { state: 'MA' } },
    { address: { state: 'CT' } },
    { address: { state: 'ME' } },
    { address: { state: 'VT' } },
    { address: { state: 'NH' } },
    { address: { state: 'RI' } },
    { address: { state: 'NY' } },
  ];
  it('should return true when state is MA', () => {
    const result = inNewEngland(customers[0].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return true when state is CT', () => {
    const result = inNewEngland(customers[1].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return true when state is ME', () => {
    const result = inNewEngland(customers[2].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return true when state is VT', () => {
    const result = inNewEngland(customers[3].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return true when state is NH', () => {
    const result = inNewEngland(customers[4].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return true when state is RI', () => {
    const result = inNewEngland(customers[5].address.state);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return false when state is NY', () => {
    const result = inNewEngland(customers[6].address.state);
    const expected = false;
    expect(result).toEqual(expected);
  });
  it('should return false when state is null', () => {
    const result = inNewEngland(null);
    const expected = false;
    expect(result).toEqual(expected);
  });
  it('should retun only customers in New England', () => {
    const result = customers.filter((c) => inNewEngland(c.address.state));
    const expected = [
      { address: { state: 'MA' } },
      { address: { state: 'CT' } },
      { address: { state: 'ME' } },
      { address: { state: 'VT' } },
      { address: { state: 'NH' } },
      { address: { state: 'RI' } },
    ];
    expect(result).toEqual(expected);
    expect(result.length).toEqual(expected.length);
  });
});
