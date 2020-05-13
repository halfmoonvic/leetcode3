const uniquePathsWithObstacles = require('../../src/dp/lesson1');

test('dp', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  expect(uniquePathsWithObstacles(arr, 3, 3)).toBe(2);
});
