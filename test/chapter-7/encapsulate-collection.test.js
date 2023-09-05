import { describe, test, expect } from '@jest/globals';
import { Person, Course } from '../../src/chapter-7/encapsulate-collection';

describe('person', () => {
  it('should return name', () => {
    const person = new Person('Martin Fowler');
    expect(person.name).toBe('Martin Fowler');
  });
  it('should return courses', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
    ];
    person.courses = courses;
    expect(person.courses).toStrictEqual(courses);
  });
  it('should return advanced courses', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
      new Course('Advanced Refactoring', true),
    ];
    person.courses = courses;
    const result = person.courses.filter((course) => course.isAdvanced);
    expect(result).toStrictEqual([new Course('Advanced Refactoring', true)]);
    expect(result.length).toBe(1);
  });
});
