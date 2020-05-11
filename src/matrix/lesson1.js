// 54. 螺旋矩阵
// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4, 1],
//   [5, 6, 7, 8, 1],
//   [9,10,11,12, 1]
//   [9,10,11,12, 1]
//   [9,10,11,12, 1]
//   [9,10,11,12, 1]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * 思路是 定义一个 level 变量，每次都是 遍历这个矩阵的 最外围
 * level 每增加一次，就深入一次
 * 然后 注意 slice 区间是 左闭右开
 * 54. 螺旋矩阵
 * https://leetcode-cn.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!(matrix[0] instanceof Array)) {
    return matrix;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const maxNum = Math.floor((Math.min(m, n) + 1) / 2);

  function* output(matrix, level) {
    if (level + 1 > maxNum) {
      return;
    }

    let one = [],
      two = [],
      three = [],
      four = [];

    if (level + 1 <= (n + 1) / 2) {
      one = matrix[level].slice(level, n - level);
    }

    if (level + 1 <= (m + 1) / 2) {
      two = matrix.slice(level + 1, m - level).map(arr => arr[n - 1 - level]);
    }

    if ((level + 1) * 2 <= n && m >= 2 && m - level !== level + 1) {
      three = matrix[m - 1 - level].slice(level, n - 1 - level).reverse();
    }

    if ((level + 1) * 2 < m && n >= 2 && n - level !== level + 1) {
      four = matrix
        .slice(level + 1, m - 1 - level)
        .map(arr => arr[level])
        .reverse();
    }

    for (const item of one.concat(two, three, four)) {
      yield item;
    }

    yield* output(matrix, level + 1);
  }

  return Array.from(output(matrix, 0));
};

// npm 包里面 没有安装解析 遍历器生成函数的包，无法使用上面那个
var spiralOrder2 = function (matrix) {
  if (!(matrix[0] instanceof Array)) {
    return matrix;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const maxNum = Math.floor((Math.min(m, n) + 1) / 2);

  function output(matrix, level, res = []) {
    if (level + 1 > maxNum) {
      return res;
    }

    let one = [],
      two = [],
      three = [],
      four = [];

    if (level + 1 <= (n + 1) / 2) {
      one = matrix[level].slice(level, n - level);
    }

    if (level + 1 <= (m + 1) / 2) {
      two = matrix.slice(level + 1, m - level).map(arr => arr[n - 1 - level]);
    }

    if ((level + 1) * 2 <= n && m >= 2 && m - level !== level + 1) {
      three = matrix[m - 1 - level].slice(level, n - 1 - level).reverse();
    }

    if ((level + 1) * 2 < m && n >= 2 && n - level !== level + 1) {
      four = matrix
        .slice(level + 1, m - 1 - level)
        .map(arr => arr[level])
        .reverse();
    }

    res = res.concat(one, two, three, four);

    return output(matrix, level + 1, res);
  }

  return output(matrix, 0);
};

module.exports = spiralOrder2;

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ]),
// );

// console.log(spiralOrder([[7], [9], [6]]));

// console.log(
//   spiralOrder([
//     [1, 2],
//     [3, 4],
//   ]),
// );

// console.log(
//   spiralOrder([
//     [2, 3, 4],
//     [5, 6, 7],
//     [8, 9, 10],
//     [11, 12, 13],
//     [14, 15, 16],
//   ]),
// );
