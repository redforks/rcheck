import { assert } from '.';

test('assert', () => {
  assert(true);

  expect(() => assert(false)).toThrow('Assertion failed');
  expect(() => assert(0, 'blah')).toThrow('Assertion failed: blah');
});
