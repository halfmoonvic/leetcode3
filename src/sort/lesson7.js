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

// console.log(quickSort([2, 1, 4, 1, 5]));

// 划分交换排序
function quickSort2(arr) {
  // 数组指定两个位置进行值交换
  let swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let findCenter = (arr, left, right) => {
    let flag = arr[left];
    let idx = left + 1;
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i);
        idx++;
      }
    }
    swap(arr, left, idx - 1);
    return idx;
  };

  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right);
      sort(arr, left, center - 1);
      sort(arr, center, right);
    }
  };

  sort(arr, 0, arr.length - 1);
  return arr;
}

module.exports = { quickSort, quickSort2 };
