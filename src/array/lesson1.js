// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * 下面的方法就是自己写的，就是递归 与 flatMap(用 reduce 代替了) 结合
 * 17. 电话号码的字母组合 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function combine(digits, res = []) {
    if (!digits) {
      return res;
    }
    const current = map[digits[0]].split('');

    if (!res.length) {
      res = current;
    } else {
      res = res.reduce((accumulator, c) => {
        return accumulator.concat(current.map(v => c + v));
      }, []);
    }

    return combine(digits.slice(1), res);
  }

  return combine(digits);
};

module.exports = letterCombinations;


// 第一次看见时的想法
// 思路就是简单的不断的合并两个已有的数组
var letterCombinations2 = function(digits) {
  if (!digits) {
    return [];
  }
  let defaultLettersMap = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];

  function twoNumbersMap(arr1, arr2) {
    const arr = [];
    for (let val1 of arr1) {
      for (let val2 of arr2) {
        arr.push(val1 + val2);
      }
    }
    return arr;
  }

  let lettersMap = [];
  digits.split('').forEach(v => {
    lettersMap.push(defaultLettersMap[v]);
  });

  const output = lettersMap.reduce((current, next) => {
    return twoNumbersMap(current, next);
  });

  return output;
};
