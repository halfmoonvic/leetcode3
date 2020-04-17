const sort = require('../../src/sort/lesson2.js');

test('sort 冒泡排序', () => {
  expect(sort([5, 2, 7, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 7]);
});
