// https://leetcode.cn/problems/maximum-subarray/description/

// 题解 https://leetcode.cn/problems/maximum-subarray/solutions/9058/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [];
  dp.push(nums[0]);
  let answer = dp[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp.push(nums[i]);
    answer = Math.max(answer, nums[i]);
    } else {
      dp.push(nums[i] + dp[i - 1]);
    answer = Math.max(answer, nums[i] + dp[i - 1]);

    }
  }
  return answer;
};

module.exports = {
  maxSubArray
};

console.log(maxSubArray([5,4,-1,7,8])); // 23