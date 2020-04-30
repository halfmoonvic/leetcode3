// 快速排序
// 数组中指定一个元素作为标尺，比它大的元素放到该元素后面，
// 比它小的放到该元素前面，如此重复直至全部正序排列

function quickSort(arr) {
  const _quickSort = arr => {
    let len = arr.length;
    if (len < 2) {
      return arr;
    }

    const flag = arr[0];
    const left = [];
    const rihgt = [];

    for (let i = 1; i < len; i++) {
      if (arr[i] < flag) {
        left.push(arr[i]);
      } else {
        rihgt.push(arr[i]);
      }
    }
    return _quickSort(left).concat(flag, quickSort(rihgt));
  };

  return _quickSort(arr);
}

module.exports = quickSort;

// console.log(quickSort([2, 1, 4, 1, 5]));
