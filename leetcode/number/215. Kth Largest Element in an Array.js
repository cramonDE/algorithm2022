// https://leetcode.cn/problems/kth-largest-element-in-an-array/description/

const { heapInsert, heapify, printHeap } = require("../../sort/heap-sort");
const { swap } = require("../../utils/swap");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let list = nums;
  list.forEach((_element, index) => {
    heapInsert(list, index);
  });
  let result = 0;
  let lastIndex = list.length - 1;

  while (k--) {
    result = list[0];
    swap(list, 0, lastIndex); // 堆排序必须保证其余的顺序， 不要使用 unshift， shift
    heapify(list, lastIndex--);
  }
  return result;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([-1, 2, 0], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let left = 0, right = nums.length - 1;
  const target = nums.length - k;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const pivotIndex = partition(nums, left, right);
    if (pivotIndex === target) {
      return nums[pivotIndex];
    }
    if (pivotIndex < target) {
      left = pivotIndex + 1;
    }
    if (pivotIndex > target) {
      right = pivotIndex - 1;
    }
  }

};


/**
 * 
 * @param {number[]} list 
 * @param {number} left 
 * @param {number} right 
 */
var partition = (list, left, right) => {
  const target = list[right];
  let pivotIndex = left;
  for (let index = left; index <= right; index++) {
    if (list[index] <= target) {
      swap(list, index, pivotIndex);
      pivotIndex++;
    }
  }
  return pivotIndex - 1;
};

module.exports = {
  findKthLargest
};

