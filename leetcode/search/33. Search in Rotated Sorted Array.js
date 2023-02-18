// https://leetcode.cn/problems/search-in-rotated-sorted-array/description/

// 二分查找的变形，本质上可以从有序和无序的数组完成二分的判断

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while(left <= right) { // 这一步需要等于，才会走到 left 和 right 相等的分支
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) return middle;
    if (nums[left] <= nums[middle]) {
      // 左边有序
      if (target < nums[middle] && target >= nums[left]) {
        // target 在有序的这一侧
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 右边有序
      if (target > nums[middle] && target <= nums[right]) {
        // target 在有序的这一侧
        left = middle  + 1;

      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};