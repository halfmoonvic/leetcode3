// 605. 种花问题
// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

// 示例 1:

// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True
// 示例 2:

// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False
// 注意:

// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。
// 通过次数19,918提交次数63,227

/**
 * 思路就是一个个的数，每数一个就记一个，记下的那个 重置为 1，这样就不影响数下一个了
 * leetcode 605. 种花问题 https://leetcode-cn.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let sum = 0;

  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return 1 >= n;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        sum++;
        flowerbed[i] = 1;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        sum++;
        flowerbed[i] = 1;
      } else if (i === flowerbed.length - 1 && flowerbed[i - 2]) {
        sum++;
      }
    }
  }
  return sum >= n;
};

// 思路还是数，不过采取补0 的方式，这样就避免了首位临界的问题
var canPlaceFlowers2 = function (flowerbed, n) {
  let sum = 0;

  const arr = [0, ...flowerbed, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] === 0 && arr[i + 1] === 0 && i !== 0 && i !== arr.length) {
        sum++;
        arr[i] = 1;
      }
    }
  }
  return sum >= n;
};

// 还有一个思路3
// 就是 对数组 match 出 所有的 [1, 0, 0, 0, 1] 这种结构，数中间有多少个0，便有相应多少盆
// 也有边界的问题，不过 直接就 首位 部 [1, 0, ..., 0, 1] 就好了

module.exports = {canPlaceFlowers, canPlaceFlowers2};

