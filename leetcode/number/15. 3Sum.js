// https://leetcode.cn/problems/3sum/description/
// https://leetcode.cn/problems/3sum/solutions/39722/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/

// 降维+去重，选定一个值开始循环，从左右两边逼近
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  const resultList = [];
  // 降维，i 只能循环到这里
  for(let i = 0; i < nums.length - 2; i++) {
    // 后面的数都比他大，提前结束循环
    if (nums[i] > 0) return resultList; 
    // 先去重, 注意这里是 - 1，因为 i 是往前面进行比较，前面的情况已经包括了，往后面跳过的话会漏
    if ( i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if ( sum === 0) {
        resultList.push([nums[i] , nums[left] , nums[right]]);
        // 继续去重
        while(left < right && nums[left] === nums[left + 1]) left = left + 1;
        while(left < right && nums[right] === nums[right - 1]) right = right - 1;

        // 去完重之后要缩小区间，左右都要缩小
        left = left + 1;
        right = right - 1;

      } else if (sum > 0) {
        // 不满足的根据情况改变区间大小
        right = right - 1;
      } else {
        left = left + 1;
      }
    }
  }
  return resultList;

};

module.exports = {
  threeSum
};
