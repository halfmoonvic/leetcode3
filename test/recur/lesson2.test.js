const findSubstring = require('../../src/recur/lesson2');

test('findSubstring', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([9, 0]);
  expect(
    findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
  ).toEqual([]);
});
