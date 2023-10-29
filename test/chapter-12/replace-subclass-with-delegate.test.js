import { expect, it, describe } from '@jest/globals';
import {
  createBooking,
  createPremiumBooking,
} from '../../src/chapter-12/replace-subclass-with-delegate';

describe('Booking', () => {
  it('returns false for hasTalkback', () => {
    const booking = createBooking({}, 'date');
    expect(booking.hasTalkback).toBe(false);
  });
  it('returns true for hasTalkback', () => {
    const booking = createBooking({ talkback: 'talkback' }, 'date');
    expect(booking.hasTalkback).toBe(true);
  });
  describe('PremiumBooking', () => {
    it('returns true for hasTalkback', () => {
      const booking = createPremiumBooking({ talkback: 'talkback' }, 'date');
      expect(booking.hasTalkback).toBe(true);
    });
    it('returns false for hasTalkback', () => {
      const booking = createPremiumBooking({}, 'date');
      expect(booking.hasTalkback).toBe(false);
    });
    it('returns true for hasDinner', () => {
      const booking = createPremiumBooking({ talkback: 'talkback' }, 'date', {
        dinner: 'dinner',
      });
      expect(booking.hasDinner).toBe(true);
    });
    it('returns false for hasDinner', () => {
      const booking = createPremiumBooking(
        { talkback: 'talkback' },
        'date',
        {},
      );
      expect(booking.hasDinner).toBe(false);
    });
  });
});
