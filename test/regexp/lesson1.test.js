const {
  repeatedSubstringPattern,
  repeatedSubstringPattern2,
  repeatedSubstringPattern3,
} = require('../../src/regexp/lesson1.js');

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abcabcabc')).toBe(true);
  expect(repeatedSubstringPattern2('abcabcabc')).toBe(true);
  expect(repeatedSubstringPattern3('abcabcabc')).toBe(true);
});

test('repeatedSubstringPattern1', () => {
  expect(repeatedSubstringPattern('abcabcabcd')).toBe(false);
  expect(repeatedSubstringPattern2('abcabcabcd')).toBe(false);
  expect(repeatedSubstringPattern3('abcabcabcd')).toBe(false);
});
