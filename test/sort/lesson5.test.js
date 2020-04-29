const maximumGap = require('../../src/sort/lesson5');

test('oddSort', () => {
  expect(maximumGap([1, 10])).toBe(9);
  expect(maximumGap([10])).toBe(0);
  expect(maximumGap([10])).toBe(0);
  expect(maximumGap([3, 6, 9, 1])).toBe(3);
});
