const { gcd, hasGroupsSizeX } = require('../../src/array/lesson2.js');

test('gcd', () => {
  expect(gcd(6, 9)).toBe(3);
  expect(gcd(8, 2)).toBe(2);
});


test('hasGroupsSizeX: [1,2,3,4,4,3,2,1]', () => {
  expect(hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9])).toBe(true);
});
