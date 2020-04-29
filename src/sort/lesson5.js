// 164. 最大间距
// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。

// 示例 1:

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:

// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。
// 说明:

// 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
// 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-gap
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 164. 最大间距
 * https://leetcode-cn.com/problems/maximum-gap/
 * 思路就是，在冒泡排序过程中，对已经排序过的 数据进行相减之后，进行比较
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  let max = -Infinity;

  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }

    // 就排序好的 找出差值
    // 在 第一轮排序的时候，仅排序了一个，需要最少有两个排序好的进行相减
    if (i < nums.length - 1) {
      const sub = nums[i + 1] - nums[i];
      if (sub > max) {
        max = sub;
      }
    }
  }

  // 此处在 for 循环中 没有 i = 0
  if (nums[1] - nums[0] > max) {
    max = nums[1] - nums[0];
  }
  return max;
};

module.exports = maximumGap;
