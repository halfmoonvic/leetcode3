// 构建一个最大堆过程：既是，让任意一个 父节点是其子节点的最大值
// 基本思路就是从一个最小的 二叉树结构单元开始构建。然后逐渐拼凑出整体的堆
class Heap {
  constructor(data) {
    this.data = data;
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
