// https://leetcode.cn/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {

  let i = 0, j = 0, result = Number.MAX_SAFE_INTEGER, sum = 0;
  for (; j < nums.length; j++) {
    sum += nums[j];
    
    if (sum >= target) {
      result = Math.min(result, j - i + 1);
      // 开始进行窗口缩小
      while(sum >= target) {
        // 这里改变的顺序是，1. 先计算下标，第一次会重复计算，不影响 2. 缩小窗口 3. 增加下标i，进入下一次循环
        sum -= nums[i];
        result = Math.min(result, j - i + 1);
        i++;
      }
      
    }
  }
  if (result === Number.MAX_SAFE_INTEGER) return 0;
  return result;

};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
module.exports = {
  minSubArrayLen
};