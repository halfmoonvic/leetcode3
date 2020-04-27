const {
  sortArrayByParityII,
  sortArrayByParityII2,
} = require('../../src/sort/lesson3');

test('oddSort', () => {
  expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
  expect(sortArrayByParityII2([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
});
