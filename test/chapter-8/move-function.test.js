import { describe, it, expect } from '@jest/globals';
import { trackSummary, Account } from '../../src/chapter-8/move-function';

describe('trackSummary', () => {
  it('should return track summary', () => {
    const points = [
      { lat: 0, lon: 0, time: 0 },
      { lat: 0, lon: 5, time: 6 },
      { lat: 0, lon: 10, time: 12 },
    ];
    const track = trackSummary(points);
    expect(track.time).toBe(12);
    expect(track.distance).toBe(690.975850864555);
    expect(track.pace).toBe(0.00028944571615601073);
  });
  it('should return track summary', () => {
    const points = [
      { lat: 0, lon: 0, time: 0 },
      { lat: 0, lon: 5, time: 6 },
    ];
    const track = trackSummary(points);
    expect(track.time).toBe(6);
    expect(track.distance).toBe(345.4879254322775);
    expect(track.pace).toBe(0.00028944571615601073);
  });
});

describe('Account', () => {
  it('should return bank charge', () => {
    const account = new Account({
      daysOverdrawn: 10,
      type: { isPremium: true },
    });
    expect(account.bankCharge).toBe(17.05);
    expect(account.overdraftCharge).toBe(12.55);
  });
  it('should return bank charge', () => {
    const account = new Account({
      daysOverdrawn: 10,
      type: { isPremium: false },
    });
    expect(account.bankCharge).toBe(22);
    expect(account.overdraftCharge).toBe(17.5);
  });
});
