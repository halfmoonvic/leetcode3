const letterCombinations = require('../../src/array/lesson1.js');

test('letterCombinations: 23', () => {
  expect(letterCombinations('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});

