const { quickSort, quickSort2 } = require('../../src/sort/lesson7');

test('oddSort', () => {
  expect(quickSort([2, 1, 4, 1, 5])).toEqual([1, 1, 2, 4, 5]);
  expect(quickSort2([2, 1, 4, 1, 5])).toEqual([1, 1, 2, 4, 5]);
});
