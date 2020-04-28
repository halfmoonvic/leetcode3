const { findKthLargest, findKthLargest2 } = require('../../src/sort/lesson4');

test('oddSort', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  expect(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});
