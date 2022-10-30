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
    const newList = forkNewList(output); // 注意这里要深复制一下数组，后面的swap是基于引用的修改
    result.push(newList);
    return;
  }
  for( let i = currentIndex; i < output.length; i++) {
    swap(output, i , currentIndex);
    dfs(result, output, currentIndex + 1);
    // 完成结果，撤销
    swap(output, i, currentIndex);
  }
};

// console.log(permute([1,2,3]));
// console.log(permute([1]));

module.exports = {
  permute
};