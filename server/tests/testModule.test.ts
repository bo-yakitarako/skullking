import { add } from './testModule';

describe.each([
  [1, 1, 2],
  [4, -2, 2],
  [-12, -34, -46],
])('add(%i, %i)', (a, b, expected) => {
  test(`足したら${expected}になるはずだぞぉ？`, () => {
    expect(add(a, b)).toBe(expected);
  });
});
