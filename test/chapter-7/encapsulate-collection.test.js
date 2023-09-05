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
    courses.forEach((course) => person.addCourse(course));
    expect(person.courses).toStrictEqual(courses);
  });
  it('should return advanced courses', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
      new Course('Advanced Refactoring', true),
    ];
    courses.forEach((course) => person.addCourse(course));
    const result = person.courses.filter((course) => course.isAdvanced);
    expect(result).toStrictEqual([new Course('Advanced Refactoring', true)]);
    expect(result.length).toBe(1);
  });
  // coursesを取り出して、変更しても、personのcoursesは変更されない
  it('should return courses', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
    ];
    courses.forEach((course) => person.addCourse(course));
    const personCourses = person.courses;
    personCourses.push(new Course('Advanced Refactoring', true));
    expect(person.courses).toStrictEqual(courses);
    expect(person.courses.length).toBe(2);
    expect(personCourses).not.toStrictEqual(person.courses);
  });
  it('should remove course', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
    ];
    courses.forEach((course) => person.addCourse(course));
    person.removeCourse(courses[0]);
    expect(person.courses).toStrictEqual([new Course('Refactoring', false)]);
  });
  it('should throw error', () => {
    const person = new Person('Martin Fowler');
    const courses = [
      new Course('Refactoring', false),
      new Course('Refactoring', false),
    ];
    courses.forEach((course) => person.addCourse(course));
    expect(() =>
      person.removeCourse(new Course('Advanced Refactoring', true)),
    ).toThrow(RangeError);
  });
});
