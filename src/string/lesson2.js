// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

// 重复出现的子串要计算它们出现的次数。

// 示例 1 :

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
// 示例 2 :

// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
// 注意：

// s.length 在1到50,000之间。
// s 只包含“0”或“1”字符。

/**
 * 696. 计数二进制子串 https://leetcode-cn.com/problems/count-binary-substrings/
 * @param {string}
 * @return {number}
 * 思路
 * 1. 利用正则 去匹配一个 字符串当中 符合规则的 子串（我的思路就是校验输入的字符串，校验子串 这就是正则的能力了）
 * 2. 因为正则就可以 校验一个 字符串的 的子串，所以 可以直接通过一个 for 循环创建 子串，而不用像我那样两个 for 循环 创建所有可能的子串
 * 3. 值得学习的地方包括
 * a. 字符串的 repeat 方法
 * b. 正则 通过 new RegExp(`exp`) 即 exp 里面的内容也可以是一个变量，不要一写正则就是完全的写出一个正则来
 */
var countBinarySubstrings = function (str) {
  // 建立数据结构，堆栈，保存数据
  let r = [];

  // 给定任意子输入 都 返回第一个符合条件的子串
  let match = str => {
    let j = str.match(/^(0+|1+)/)[0];
    let o = (j[0] ^ 1).toString().repeat(j.length);
    let reg = new RegExp(`^(${j}${o})`);
    if (reg.test(str)) {
      return RegExp.$1;
    } else {
      return '';
    }
  };

  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i));
    if (sub) {
      r.push(sub);
    }
  }
  return r;
};

module.exports = countBinarySubstrings;

// 自己写的 超时了
// 思路
// 1. 先制作一个 校验函数，校验传递进来的字符串是否符合要求
// 2. 基于给定的字符串，去生成所有的 字符串组合方式
function validateArr(arr) {
  const len = arr.length;

  if (len % 2 > 0) {
    return false;
  }

  if (len === 2) {
    if (arr[0] !== arr[1]) {
      return true;
    } else {
      return false;
    }
  }

  const arr1 = arr.slice(0, len / 2);
  const arr2 = arr.slice(len / 2);

  const isEqualArr1 = arr1.every(v => v === arr1[0]);
  const isEqualArr2 = arr2.every(v => v === arr2[0]);

  return isEqualArr1 && isEqualArr2 && arr[0] !== arr2[0];
}

var countBinarySubstrings2 = function (s) {
  const arr = s.split('');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (let j = i; j < arr.length; j++) {
      temp.push(arr[j]);
      if (validateArr(temp)) {
        num += 1;
        break;
      }
    }
  }
  return num;
};

// 二分法
// 找到 0 与 1 的分界点，基于分界点去寻找符合规则的字符串的个数，一次循环就够了
var countBinarySubstrings3 = function (s) {
  function search(i, arr) {
    let temp = 1;
    const current = arr[i];
    const prev = arr[i - 1];

    let n = 0;
    while (++n) {
      const first = i - n - 1;
      const next = i + n;
      if (arr[first] === prev && arr[next] === current) {
        temp += 1;
      } else {
        break;
      }
    }
    return temp;
  }

  let num = 0;
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    }
    const prev = arr[i - 1];
    const current = arr[i];
    if (prev !== current) {
      console.log(i);
      num += search(i, arr);
    }
  }
  return num;
};
