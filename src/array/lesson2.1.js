/**
 * 914. 卡牌分组 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const deckSet = Array.from(new Set(deck));
  const deckString = deck.join(',');

  const x = new Array(deck.length + 1).fill('');
  return x.some((t, count) => {
    return deckSet.every(v => {
      if (count < 2) {
        return false;
      }
      const reg = new RegExp(`${v}`, 'g');
      const regMatchArrLen = deckString.match(reg).length;
      // console.log(count, reg, regMatchArrLen, regMatchArrLen % count)
      return regMatchArrLen % count === 0;
    });
  });
};

module.exports = hasGroupsSizeX;

