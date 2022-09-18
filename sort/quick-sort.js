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
  // 参考荷兰国旗题目，需要处理等于的情况，将等于的结果进行交换
  // 如果出现小于等于哨兵的值，交换，边界和指针移动
  // 出现大于情况，直接进行移动指针即可
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