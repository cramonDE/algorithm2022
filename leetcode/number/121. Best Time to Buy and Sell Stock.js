// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let answer = 0, high = -1, low = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > high) {
      high = prices[i];
    }
    if (prices[i] < low) {
      answer = Math.max(answer , high - low);
      low = prices[i];
      high = -1; // 最低点发生变化，重新制定
    }
  }
  answer = Math.max(answer , high - low);
  return answer;
};

module.exports = {
  maxProfit,
};

