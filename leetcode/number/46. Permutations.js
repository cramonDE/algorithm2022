// https://leetcode.cn/problems/permutations/description/

const { forkNewList } = require("../../utils/get-list");
const { swap } = require("../../utils/swap");



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  dfs(result, nums, 0);
  return result;
};

/**
 * 
 * @param {Array<number[]>} result 存放结果的数组
 * @param {number[]} output 每一次遍历的结果
 * @param {*} currentIndex 当前交换的 index
 * @returns 
 */
const dfs = (result, output, currentIndex) => {
  if (currentIndex === output.length) {
    result.push(output);
    return;
  }
  for( let i = currentIndex; i < output.length; i++) {
    const forkOutput = JSON.parse(JSON.stringify(output)); // 深拷贝一个数组，因为后面有交换的操作
    swap(forkOutput, i, currentIndex);
    dfs(result, forkOutput, currentIndex + 1);
    // 完成结果，撤销
  }
};

// console.log(permute([1,2,3]));
// console.log(permute([1]));

module.exports = {
  permute
};