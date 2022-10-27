// https://leetcode.cn/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const map = new Map();
  nums.forEach((item, index) => {
    map.set(target - item, index);
  });
  const result = [];
  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i !== map.get(nums[i])) {
      result.push(i, map.get(nums[i]));
      break;
    }
  }
  map.clear();
  return result;
};

module.exports = {
  twoSum
};