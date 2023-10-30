import { describe, it, expect } from '@jest/globals';
import {
  createCatalogItem,
  createScroll,
} from '../../src/chapter-12/replace-superclass-with-delegate';

describe('CatalogItem', () => {
  it('returns true for hasTag', () => {
    const catalogItem = createCatalogItem('id', 'title', ['tag']);
    expect(catalogItem.hasTag('tag')).toBe(true);
  });
});

describe('Scroll', () => {
  it('returns false for needsCleaning', () => {
    const scroll = createScroll('id', 'title', ['revered'], new Date());
    expect(scroll.needsCleaning(new Date())).toBe(false);
  });
  it('returns false for needsCleaning', () => {
    const scroll = createScroll(
      'id',
      'title',
      ['revered'],
      new Date('2020-01-01'),
    );
    expect(scroll.daysSinceLastCleaning(new Date('2021-01-10'))).toBe(375);
    expect(scroll.needsCleaning(new Date('2021-01-10'))).toBe(false);
  });
  it('returns true for needsCleaning', () => {
    const scroll = createScroll(
      'id',
      'title',
      ['revered'],
      new Date('2020-01-01'),
    );
    expect(scroll.daysSinceLastCleaning(new Date('2026-01-11'))).toBe(2202);
    expect(scroll.needsCleaning(new Date('2026-01-11'))).toBe(true);
  });
});
