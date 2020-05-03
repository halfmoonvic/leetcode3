// 30. 串联所有单词的子串
// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let nums = [];
  let len = words.slice().length;
  function combine(words, w) {
    if (w.length === len) {
      let index = s.indexOf(w.join(''));
      if (index >= 0) {
        nums.push(index);
      }
    } else {
      for (let i = 0; i < words.length; i++) {
        // 使用 push 方法，那么，每次递归循环 w 都是指向了同一个引用
        // 而在 for 这里是需要构建新的 组合方式，构建出一个符合要求的 组合之后
        // 下一个 for 循环则是 构建一个新的组合，而不是原由的基础之上
        // w.push(words[i]);
        // const _words = words.slice();
        // _words.splice(i, 1);
        // combine(_words, w);

        // 所以这里需要使用 concat 方法，不会更改原始数组
        const _words = words.slice();
        _words.splice(i, 1);
        combine(_words, w.concat([words[i]]));
      }
    }
  }

  combine(words, []);

  return Array.from(new Set(nums));
};

module.exports = findSubstring;

// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));
// console.log(
//   findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
// );
