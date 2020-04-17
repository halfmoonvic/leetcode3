// 选择排序，既是找出一个数组当中最大 or 最小的值，找到比当前还要 大 or 小 的，则交换两者的顺序
var sort = function (arr) {
  for (let i = 0, min; i < arr.length; i++) {
    min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        const temp = arr[j];
        arr[j] = min;
        min = temp;
      }
    }
    arr[i] = min;
  }

  return arr;
};

module.exports = sort;

// console.log(sort([5, 2, 7, 1, 3, 4]));
