const spiralOrder2 = require('../../src/matrix/lesson1.js');

test('spiralOrder2:', () => {
  expect(
    spiralOrder2([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

  expect(
    spiralOrder2([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]),
  ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);

  expect(
    spiralOrder2([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([1, 2, 4, 3]);

  expect(spiralOrder2([[7], [9], [6]])).toEqual([7, 9, 6]);

  expect(
    spiralOrder2([
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
    ]),
  ).toEqual([2, 3, 4, 7, 10, 13, 16, 15, 14, 11, 8, 5, 6, 9, 12]);
});
