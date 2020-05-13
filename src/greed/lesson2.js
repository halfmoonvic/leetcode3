// 860. 柠檬水找零
// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

// 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 示例 1：

// 输入：[5,5,5,10,20]
// 输出：true
// 解释：
// 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
// 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
// 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
// 由于所有客户都得到了正确的找零，所以我们输出 true。
// 示例 2：

// 输入：[5,5,10]
// 输出：true
// 示例 3：

// 输入：[10,10]
// 输出：false
// 示例 4：

// 输入：[5,5,10,10,20]
// 输出：false
// 解释：
// 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
// 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
// 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
// 由于不是每位顾客都得到了正确的找零，所以答案是 false。

// 提示：

// 0 <= bills.length <= 10000
// bills[i] 不是 5 就是 10 或是 20

/**
 * 860. 柠檬水找零
 * https://leetcode-cn.com/problems/lemonade-change/
 * 我的思路就是，每次交易都去检验一下，检验通过，则在自己的数组当中 删去 找零 且 收集 当前票
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let temp = [];

  function detect(_arr, count) {
    const arr = _arr.sort((a, b) => b - a);
    let collect = [];
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (val <= count && val + res <= count) {
        res += val;
        collect.push(i);
      }
      if (res === count) {
        break;
      }
    }
    if (res !== count) {
      return false;
    }
    collect.forEach(i => {
      arr.splice(i, 1, 0);
    });
    arr.unshift(count + 5);
    return arr;
  }

  for (let i = 0; i < bills.length; i++) {
    const item = bills[i];
    if (item === 5) {
      temp.push(item);
      continue;
    }

    const t = detect(temp, item - 5);
    if (!t) {
      return false;
    } else {
      temp = t;
    }
  }

  return true;
};

module.exports = lemonadeChange;

// 这是老师的解法
// 贪心算法
// 策略1: 给钱找零，不区分金额直到找到足够的零钱（追求单次找零）
// 策略2: 给钱找零，优先给金额大的零钱，尽量吧小额零钱放在手里（追求多次找零）
var lemonadeChange2 = function (bills) {
  // 表示自己的钱箱，存储自己的零钱
  let hand = [];

  while (bills.length) {
    let money = bills.shift();
    if (money === 5) {
      hand.push(5);
      continue;
    }
    hand.sort((a, b) => b - a);
    let change = money - 5;
    for (let i = 0, len = hand.length; i < len; i++) {
      if (hand[i] <= change) {
        change -= hand[i];
        hand.splice(i, 1);
        i--;
      }
      if (change === 0) {
        break;
      }
    }
    if (change !== 0) {
      return false;
    } else {
      hand.push(money);
    }
  }

  return true;
};

// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 10]));
// console.log(lemonadeChange([10, 10]));
