// https://leetcode.cn/problems/longest-increasing-subsequence/description/

// 通过动态规划求数组的最长上升子序列
// 每一次循环都看最后一个数能不能加上去


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 当遍历的过程中出现了递增序列，取之前的结果进行计算
        dp[i] = Math.max(dp[j] + 1, dp[i]);
        // 这里的 i 指的是以 i 结尾的序列的最长递增子序列
      }
    }
  }

  return Math.max(...dp); // 不同的i有不同的结果，选出里面最大的
};