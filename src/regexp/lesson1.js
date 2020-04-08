// 459. 重复的子字符串
// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

// 示例 1:

// 输入: "abab"

// 输出: True

// 解释: 可由子字符串 "ab" 重复两次构成。
// 示例 2:

// 输入: "aba"

// 输出: False
// 示例 3:

// 输入: "abcabcabcabc"

// 输出: True

// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

/**
 * + 代表 {1, } ，即 意味着最好重复一次，而题目要求说完全由子串构成，则意味着最少要有两次
 * 所以 /^(\w+)+$/.test(s); 是不可以的，必须有一个反向引用
 * 注意这个 正则是去 完整的匹配下来 这个字符串，而不是匹配字符串当中的部分内容，所以，正则里的内容是紧挨着的
 * 459. 重复的子字符串 https://leetcode-cn.com/problems/repeated-substring-pattern/submissions/
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s);
};

// 自己看见之前写的而做的更像样子的改进
var repeatedSubstringPattern2 = function (s) {
  const testReg = function (subStr) {
    if (subStr === s) {
      return false;
    }
    const reg = RegExp(`^(${subStr})+$`);
    const res = reg.test(s);
    if (res) {
      return true;
    } else {
      const newSubstr = s.slice(0, subStr.length + 1);
      return testReg(newSubstr);
    }
  };
  return testReg(s[0]);
};

module.exports = repeatedSubstringPattern;

// console.log(/^(abc)+$/.test('abcabcabc'))

// 最开始自己所想到的版本，就是一个一个查找遍历 穷举
var repeatedSubstringPattern3 = function (s) {
  const slen = s.length;
  const testReg = n => {
    if (n >= slen) {
      return false;
    }
    if (slen % n !== 0) {
      return testReg(n + 1);
    }
    const substr = s.slice(0, n);
    const reg = RegExp(`^(${substr})+$`);
    if (reg.test(s)) {
      // console.log(substr);
      return true;
    } else {
      return testReg(n + 1);
    }
  };

  return testReg(1);
};

module.exports = {
  repeatedSubstringPattern,
  repeatedSubstringPattern2,
  repeatedSubstringPattern3,
};
