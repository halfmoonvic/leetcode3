const findCheapestPrice = require('../../src/dp/lesson2');

test('0,2,1', () => {
  expect(findCheapestPrice(0, 2, 1)).toBe(200);
});

test('0,2,0', () => {
  expect(findCheapestPrice(0, 2, 0)).toBe(500);
});
