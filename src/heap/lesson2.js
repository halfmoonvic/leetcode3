// 451. 根据字符出现频率排序
// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

// 示例 1:

// 输入:
// "tree"

// 输出:
// "eert"

// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
// 示例 2:

// 输入:
// "cccaaa"

// 输出:
// "cccaaa"

// 解释:
// 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
// 注意"cacaca"是不正确的，因为相同的字母必须放在一起。
// 示例 3:

// 输入:
// "Aabb"

// 输出:
// "bbAa"

// 解释:
// 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
// 注意'A'和'a'被认为是两种不同的字符。

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {};

module.exports = frequencySort;

// 构建一个最大堆过程：既是，让任意一个 父节点是其子节点的最大值
// 基本思路就是从一个最小的 二叉树结构单元开始构建。然后逐渐拼凑出整体的堆
class Heap {
  constructor(str) {
    let map = new Map();
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    });
    this.map = map;
    this.data = Array.from(map.values());
  }
  sort() {
    let arr = this.data;
    let n = arr.length;
    if (n <= 1) {
      return arr;
    }
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      Heap.maxHeapify(arr, i, n);
    }
    for (let j = 0; j < n; j++) {
      Heap.swap(arr, 0, n - 1 - j);
      Heap.maxHeapify(arr, 0, n - 1 - j - 1);
    }
    return arr;
  }
  toString() {
    let arr = this.sort();
    let str = [];
    while (arr.length) {
      let tail = arr.pop();
      for (let [k, v] of this.map) {
        if (v === tail) {
          str.push(k.repeat(v));
          this.map.delete(k);
          break;
        }
      }
    }
    return str.join('');
  }
  static swap(arr, a, b) {
    if (a === b) {
      return;
    }
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
  }
  // 构建最大堆过程
  static maxHeapify(arr, i, size) {
    // 左节点(索引)
    let l = i * 2 + 1;
    // 右节点(索引)
    let r = i * 2 + 2;
    // 最大节点的索引
    let largest = i;
    // 父节点 i 和 左节点做比较
    if (l <= size && arr[l] > arr[largest]) {
      largest = l;
    }
    // 右节点和最大值比较
    if (r <= size && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      Heap.swap(arr, i, largest);
      // 上层 二叉树 单元 构建好最大堆之后，可能影响了 子 二叉树结构的最大堆
      // 遂堆 子二叉树 结构的 最大堆 再次构建下
      Heap.maxHeapify(arr, largest, size);
    }
  }
}

module.exports = Heap;
