const firstMissingPositive = require('../../src/sort/lesson6');

test('oddSort', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  expect(firstMissingPositive([4, 3, 4, 1, 1, 4, 1, 4])).toBe(2);
});
