const { forkNewList } = require("../utils/get-list");
const { swap } = require("../utils/swap");


/**
 * 
 * @param {*} inputList 
 * @returns 
 */
function quickSort(inputList) {
  const list = forkNewList(inputList);
  quickSortImplement(list, 0, list.length - 1);
  return list;
}

/**
 * 
 * @param {number[]} list 
 * @param {number} left 
 * @param {number} right 
 */
function quickSortImplement(list, left, right) {
  if (left >= right) return;
  const middle = partition(list, left, right);
  quickSortImplement(list, 0, middle - 1);
  quickSortImplement(list, middle + 1, right);
}

/**
 * 
 * @param {number[]} list 
 * @param {number} left 
 * @param {number} right 
 * @return {number} 中点的下标
 */
function partition(list, left, right) {
  let i = left, boundary = left;
  const targetNum = list[right]; // 先不考虑随机
  while (i <= right) {
    if (list[i] <= targetNum) {
      swap(list, i, boundary);
      boundary++;
    }
    i++;
  }
  return boundary - 1;

}

module.exports = {
  quickSort
};