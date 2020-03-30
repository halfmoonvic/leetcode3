const grayCode = require('../../src/array/lesson4.js');

test('grayCode', () => {
  expect(grayCode(2)).toEqual(['00', '01', '11', '10']);
  expect(grayCode(3)).toEqual(['000', '001', '011', '010', '110', '111', '101', '100']);
});
