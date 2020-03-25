const reverseWords = require('../../src/string/lesson1.js');

test("Let's take LeetCode contest", () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc",
  );
});
