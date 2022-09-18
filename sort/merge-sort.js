const { forkNewList } = require("../utils/get-list");

const mergeSort = (inputList) => {
  const list = forkNewList(inputList);
  return process(list, 0, list.length - 1);
};

/**
 * 
 * @param {number[]} list 
 * @param {number} left 左边序号 
 * @param {number} right 右边序号
 * @returns number[]
 */
function process(list, left, right) {
  if (left === right) return [list[left]]; // 递归中断条件，直接返回一个只有一个元素的数组
  const middle = Math.floor((left + right) / 2); // 可以考虑用减法，大数情况下会溢出
  const leftList =  process(list, left, middle);
  const rightList = process(list, middle + 1, right);

  return mergeList(leftList, rightList,);
}

/**
 * 
 * @param {number[]} left 左数组
 * @param {number[]} right 右数组
 * @returns 
 */
function mergeList(left, right) {
  const result = []; // 归并排序需要额外的空间储存结果
  let i = 0, j = 0;
  if (left.length === 0) return right;
  if (right.length === 0) return right;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  while (i !== left.length) result.push(left[i++]);
  while (j !== right.length) result.push(right[j++]);
  return result;
}

module.exports = {
  mergeSort,
};