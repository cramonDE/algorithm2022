// https://leetcode.cn/problems/maximum-subarray/description/

// 题解 https://leetcode.cn/problems/maximum-subarray/solutions/9058/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = [];
  dp.push(nums[0]);
  let answer = dp[0];
  // 以 nums[i] 结尾的最大子串，这个 nums[i] 一定会在dp中，就看需不需要加上 dp[i - 1]
  for (let i = 1; i < nums.length; i++) {
    // 如果 dp[i - 1] < 0，加上去肯定变小了，舍弃掉，单独成一个项
    dp.push(dp[i - 1] < 0 ? nums[i] : nums[i] + dp[i - 1]);
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};

module.exports = {
  maxSubArray
};

console.log(maxSubArray([5, 4, -1, 7, 8])); // 23