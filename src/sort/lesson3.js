// 922. 按奇偶排序数组 II
// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

// 示例：

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 提示：

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

// 注意，此题与排序无关，是老师迷糊

/**
 * 922. 按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/\
 * 我的思路就是 分别将 奇偶数放置到两个数组当中
 * 然后将两个数组合并成符合题目要求奇偶相间的数组
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (arr) {
  const arr1 = [];
  const arr2 = [];
  arr.forEach(val => {
    if (val % 2 === 0) {
      arr1.push(val);
    } else {
      arr2.push(val);
    }
  });

  let res = [];
  arr1.forEach((_, index) => {
    res[index * 2] = arr1[index];
    res[index * 2 + 1] = arr2[index];
  });
  return res;
};

// 此种思路更为简单，既是声明奇偶两个下标
// 每次判断数据的奇偶性，向新的数组当中推送相应的数据
var sortArrayByParityII2 = function (arr) {
  const r = [];

  let odd = 1;
  let even = 0;

  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  });

  return r;
};

module.exports = { sortArrayByParityII, sortArrayByParityII2 };
