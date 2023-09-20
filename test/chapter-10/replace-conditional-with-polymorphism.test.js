import {
  plumages,
  speeds,
  rating,
} from '../../src/chapter-10/replace-conditional-with-polymorphism.js';
import { describe, expect, it } from '@jest/globals';
describe('plumages', () => {
  it('returns a map of bird names to plumage', () => {
    const birds = [
      { name: 'bird1', type: 'EuropeanSwallow' },
      { name: 'bird2', type: 'AfricanSwallow', numberOfCoconuts: 3 },
      { name: 'bird3', type: 'NorwegianBlueParrot', voltage: 120 },
      { name: 'bird4', type: 'UnknownBird' },
    ];
    const result = plumages(birds);
    expect(result.get('bird1')).toBe('average');
    expect(result.get('bird2')).toBe('tired');
    expect(result.get('bird3')).toBe('scorched');
    expect(result.get('bird4')).toBe('unknown');
  });
});

describe('speeds', function () {
  it('should return speeds', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'EuropeanSwallow',
      },
      {
        name: 'bird2',
        type: 'AfricanSwallow',
      },
      {
        name: 'bird3',
        type: 'NorwegianBlueParrot',
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(35);
    expect(result.get('bird2')).toBe(40);
    expect(result.get('bird3')).toBe(10);
  });
  it('should return null for unknown birds', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'UnknownBird',
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(null);
  });
  it('should return correct speed for nailed parrot', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'NorwegianBlueParrot',
        isNailed: true,
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(0);
  });
  it('should return correct speed for parrot with high voltage', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'NorwegianBlueParrot',
        voltage: 120,
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(22);
  });
  it('should return correct speed for parrot with low voltage', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'NorwegianBlueParrot',
        voltage: 10,
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(11);
  });
  it('should return correct speed for parrot with no voltage', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'NorwegianBlueParrot',
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(10);
  });
  it('should return correct speed for parrot with coconuts', () => {
    const birds = [
      {
        name: 'bird1',
        type: 'AfricanSwallow',
        numberOfCoconuts: 2,
      },
    ];
    const result = speeds(birds);
    expect(result.get('bird1')).toBe(36);
  });
});

describe('rating', () => {
  it('should return correct B rating', () => {
    const voyage = {
      zone: 'west-indies',
      length: 10,
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 5,
      },
      {
        zone: 'west-indies',
        profit: 15,
      },
      {
        zone: 'china',
        profit: -2,
      },
      {
        zone: 'west-africa',
        profit: 7,
      },
    ];
    const result = rating(voyage, history);
    expect(result).toBe('B');
  });
});
