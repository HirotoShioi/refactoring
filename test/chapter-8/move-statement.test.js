import { describe, it, expect } from '@jest/globals';
import { renderPerson } from '../../src/chapter-8/move-statement';
describe('renderPerson', () => {
  it('should return person', () => {
    const person = {
      name: 'Martin',
      photo: {
        title: 'Me',
        location: 'UK',
        date: new Date('2021-07-01'),
      },
    };
    const result = renderPerson(person);
    expect(result).toBe(
      '<p>Martin</p>\n' +
        '<p>title: Me</p>\n' +
        '<p>location: UK</p>\n' +
        '<p>date: Thu Jul 01 2021</p>',
    );
  });
});
