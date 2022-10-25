// https://leetcode.cn/problems/merge-sorted-array/description/

// 找最大进行尾插法

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let p = m - 1,  q = n - 1;
  let tailIndex = m + n -1;
  while(p >= 0 && q >= 0) {
    if (nums1[p] > nums2[q]) {
      nums1[tailIndex--] = nums1[p];
      p--;
    } else {
      nums1[tailIndex--] = nums2[q];
      q--;
    }
  }
  while(p >=0) {
    nums1[tailIndex--] = nums1[p];
    p--;
  }
  while(q >=0) {
    nums1[tailIndex--] = nums2[q];
    q--;
  }
  console.log(nums1);
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([0], 0, [1], 1);
merge([1,2,4,5,6,0,0], 5, [3,4], 2);


module.exports = {
  merge
};