import { describe, expect } from '@jest/globals';
describe('Hello world', () => {
  const HelloWorld = 'Hello World';
  it('should return Hello World', () => {
    expect(HelloWorld).toEqual('Hello World');
  });
});
