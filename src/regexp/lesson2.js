// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入:
// s = "aa"
// p = "a*"
// 输出: true
// 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3:

// 输入:
// s = "ab"
// p = ".*"
// 输出: true
// 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
// 示例 4:

// 输入:
// s = "aab"
// p = "c*a*b"
// 输出: true
// 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
// 示例 5:

// 输入:
// s = "mississippi"
// p = "mis*is*p*."
// 输出: false

/**
 * 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/
 * 难点在分析清楚各种情况
 * 参考链接 https://leetcode-cn.com/problems/regular-expression-matching/solution/javahui-su-he-dong-tai-gui-hua-xiang-xi-dai-ma-zhu/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 如果正则串p为空字符串s也为空这匹配成功，如果正则串p为空但是s不是空则说明匹配失败
  if (!p) {
    return !s;
  }

  // 判断s和p的首字符是否匹配，注意要先判断s不为空
  let flag = !!s && (s[0] === p[0] || p[0] === '.');
  // console.log(`flag: ${flag}, s: ${s}, p: ${p}`);

  // 如果p的第一个元素的下一个元素是*
  if (p.length >= 2 && p[1] === '*') {
    // isMatch(s, p.slice(2)) 相当于重新匹配了一个新的 pattern
    // flag && isMatch(s.slice(1), p) 则是相当于要保证前面的 匹配正确了，才好继续匹配
    return isMatch(s, p.slice(2)) || (flag && isMatch(s.slice(1), p));
  } else if (flag) {
    // 如果不是上面的情况 在首字符相同的情况下继续向下匹配
    return isMatch(s.slice(1), p.slice(1));
    // 否则 输出 false
  } else {
    return false;
  }
};

module.exports = isMatch;

// console.log(isMatch('ab', '.*c'));

// NO.10 正则表达式匹配
// 思路一：回溯法 这种匹配思路其实就是不断地减掉s和p的可以匹配首部，直至一个或两个字符串被减为空的时候，根据最终情况来得出结论。

// 如果只是两个普通字符串进行匹配，按序遍历比较即可：

// if( s.charAt(i) == p.charAt(i) )
// 如果正则表达式字符串p只有一种"."一种特殊标记，依然是按序遍历比较即可 ：

// if( s.charAt(i) == p.charAt(i) || p.charAt(i) == '.' )
// 上述两种情况实现时还需要判断字符串长度和字符串判空的操作。

// 但是，"*"这个特殊字符需要特殊处理，当p的第i个元素的下一个元素是星号时会有两种情况：

// i元素需要出现0次，我们就保持s不变，将p的减掉两个元素，调用isMatch。例如s：bc、p：a*bc，我们就保持s不变，减掉p的"a*"，调用isMatch(s:bc,p:bc)。
// i元素需要出现一次或更多次，先比较i元素和s首元素，相等则保持p不变，s减掉首元素，调用isMatch。例如s：aabb、p：a*bb，就保持p不变，减掉s的首元素，调用isMatch(s:abb,p:a*bb)。
// 此时存在一些需要思考的情况，例如s：abb、p：a*abb，会用两种方式处理：

// 按照上述第二种情况比较i元素和s首元素，发现相等就会减掉s的首字符，调用isMatch(s:bb,p:a*abb)。在按照上述第一种情况减去p的两个元素，调用isMatch(s:bb,p:abb)，最终导致false。
// 直接按照上述第一种情况减去p的两个元素，调用isMatch(s:abb,p:abb)，最终导致true。
// 所以说这算是一种暴力方法，会将所有的情况走一边，看看是否存在可以匹配的情况。

// public boolean isMatch(String s, String p) {
//     //如果正则串p为空字符串s也为空这匹配成功，如果正则串p为空但是s不是空则说明匹配失败
//     if (p.isEmpty())return s.isEmpty();
//     //判断s和p的首字符是否匹配，注意要先判断s不为空
//     boolean headMatched=!s.isEmpty()&&(s.charAt(0)==p.charAt(0)||p.charAt(0)=='.');
//     if (p.length()>=2&&p.charAt(1)=='*'){//如果p的第一个元素的下一个元素是*
//         //则分别对两种情况进行判断
//         return isMatch(s,p.substring(2))||
//             (headMatched&&isMatch(s.substring(1),p));
//     }else if (headMatched){//否则，如果s和p的首字符相等
//         return isMatch(s.substring(1),p.substring(1));
//     }else {
//         return false;
//     }
// }
// 时间复杂度：O((n+m)*2^(n+m/2)) n和m分别是s和p的长度

// 作者：jerrymouse1998
// 链接：https://leetcode-cn.com/problems/regular-expression-matching/solution/javahui-su-he-dong-tai-gui-hua-xiang-xi-dai-ma-zhu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
