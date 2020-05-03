// 93. 复原IP地址

// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 示例:

// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]

/**
 * 93. 复原IP地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 做递归操作的时候，一定要先将 结束条件想好
 * 否则就像是无头苍蝇搬，没有方向，不知道要操纵什么，返回什么
 * 即不知道 输入与输出的参数分别是什么
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (str) {
  let r = [];
  const reg = /^\d$|^[1-9]\d$|^1\d{2}$|^2[0-4]\d$|^25[0-5]$/;

  function search(cur, sub) {
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'));
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1);
        if (reg.test(tmp)) {
          search(cur.concat([tmp]), sub.substr(i + 1));
        }
      }
    }
  }

  search([], str);
  return r;
};

var restoreIpAddresses2 = function (s) {
  if (s.length > 12 || s.length < 4) {
    return [];
  }
  const reg = /^\d$|^[1-9]\d$|^1\d{2}$|^2[0-4]\d$|^25[0-5]$/;
  function* findIp(prev, sub) {
    if (!sub.length && prev.length === 4 && prev.join('') === s) {
      yield prev.join('.');
    }
    for (let i = 1; i <= Math.min(sub.length, 3); i++) {
      const ipitem = sub.slice(0, i);
      if (reg.test(ipitem)) {
        yield* findIp(prev.concat([ipitem]), sub.slice(i));
      }
    }
  }

  return Array.from(findIp([], s));
};

module.exports = { restoreIpAddresses, restoreIpAddresses2 };

// console.log(restoreIpAddresses('172162541'));
