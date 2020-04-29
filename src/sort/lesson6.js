// 41. 缺失的第一个正数

// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

//

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1
//

// 提示：

// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

/**
 * 41. 缺失的第一个正数
 * https://leetcode-cn.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let min = 1;

  nums = Array.from(new Set(nums.sort((a, b) => a - b).filter(v => v > 0)));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > i + 1) {
      min = i + 1;
      break;
    } else {
      min = nums[i] + 1;
    }
  }

  return min;
};

module.exports = firstMissingPositive;

function firstMissingPositive2(nums) {
  let i = 0;
  let j;
  let tmp;
  while (i < nums.length) {
    j = nums[i] - 1;
    if (j >= 0 && j < nums.length && nums[j] !== j + 1) {
      tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    } else {
      i++;
    }
  }
  console.log(nums);
  i = 0;
  // 在这里，如果 不符合条件， i 是不做累加的
  while (i < nums.length && nums[i] === i + 1) i++;
  return i + 1;
}

// console.log(firstMissingPositive2([1, 2, 0]));
// console.log(firstMissingPositive2([3, 4, -1, 1]));
// console.log(firstMissingPositive2([7, 8, 9, 11, 12]));
// console.log(firstMissingPositive2([4, 3, 4, 1, 1, 4, 1, 4]));
