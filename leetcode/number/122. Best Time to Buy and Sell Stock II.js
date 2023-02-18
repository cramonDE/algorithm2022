// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/solutions/476791/mai-mai-gu-piao-de-zui-jia-shi-ji-ii-by-leetcode-s/

// 买卖股票问题，可以多次购入和卖出，此题采用贪心算法可以算的局部最优解，也可以参考题解当中的动态规划思路

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let answer = 0;
  for(let i = 1; i < prices.length; i++) {
    answer = answer + Math.max(0, prices[i] - prices[i - 1]);
  }
  return answer;
};

