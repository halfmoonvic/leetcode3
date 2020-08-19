const {
  moveZeroes,
  moveZeroes2,
  moveZeroes3,
} = require('../../src/array/moveZeroes.js');

test('moveZeroes', () => {
  expect(moveZeroes([1, 0, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes2([1, 0, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  expect(moveZeroes3([1, 0, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});
