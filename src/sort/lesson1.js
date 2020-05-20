// 伪冒泡排序，这个是单纯的比较所有值的大小
// 啥啊，这TMD就是 选择排序
// 所谓的选择排序就是 选出数组当中最小/最大的那个 值来
// 将其放置到数组的最开始的位置去，如此往复就好了
// var sort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };

// 这个是真正的冒泡排序，
// j 列负责控制比较大小，交换顺序
// i 列则是 负责者对已经比较过大小的数据不在比较了
// 因为 j 列会将最大的放到最后去了
// 每一次 i 列的循环，j 列就放到最后面一个元素去
// 那么 j 列比较的元素就是 总大小减去 已经比较过的 个数，也就是 j < i
var sort2 = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

module.exports = sort2;

// 这个是 从后面 向前排
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(sort([5, 2, 7, 1, 3, 4]));
