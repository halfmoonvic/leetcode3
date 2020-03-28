const {canPlaceFlowers, canPlaceFlowers2} = require('../../src/array/lesson3.js');

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);

  expect(canPlaceFlowers2([1, 0, 0, 0, 1, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers2([1, 0, 0, 0, 1], 2)).toBe(false);
});
