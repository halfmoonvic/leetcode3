// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 进阶：

// 你可以运用递归和迭代两种方法解决这个问题吗？

/**
 * 101. 对称二叉树
 * https://leetcode-cn.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

class Tree {
  constructor(data) {
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = [];
    // 顶结点
    let root;

    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i]);
      nodeList.push(node);

      if (i > 0) {
        // 计算当前节点属于哪一层
        let n = Math.floor(Math.sqrt(i + 1));
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1;
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1;
        let parent = nodeList[p + Math.floor((i - q) / 2)];

        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
    root = nodeList.shift();
    nodeList.length = 0;
    return root;
  }

  static isSymmetric(root) {
    if (!root) {
      return true;
    }

    let walk = (left, right) => {
      if (!left && !right) {
        return true;
      }

      if ((left && !right) || (!left && right) || left.val !== right.val) {
        return false;
      }

      return walk(left.left, right.right) && walk(left.right, right.left);
    };

    return walk(root.left, root.right);
  }
}

/**
 * 递归思想： 每一部都是在做相同的处理
 * 每一部的输入输出都是相同的
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  let walk = (left, right) => {
    if (!left && !right) {
      return true;
    }

    if ((left && !right) || (!left && right) || left.val !== right.val) {
      return false;
    }

    return walk(left.left, right.right) && walk(left.right, right.left);
  };

  return walk(root.left, root.right);
};

module.exports = { isSymmetric, Tree };
