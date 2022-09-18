const { forkNewList } = require("../utils/get-list");
const { swap } = require("../utils/swap");

// 冒泡排序
const bubbleSort = (inputList) => {
  const list = forkNewList(inputList);
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j + 1] < list[j]) swap(list, j + 1, j);
    }
  }
  return list;
};

// 选择排序
const selectSort = (inputList) => {
  const list = forkNewList(inputList);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) swap(list, i, j);
    }
  }
  return list;
};

// 插入排序，取决于当前的数据排列形式
const insertSort = (inputList) => {
  const list = forkNewList(inputList);
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (list[j - 1] > list[j]) swap(list, j, j - 1);
    }
  }
  return list;
};




module.exports = {
  bubbleSort,
  selectSort,
  insertSort
};