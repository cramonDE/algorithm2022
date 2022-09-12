// 冒泡排序
const bubbleSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j + 1] < list[j]) swap(list, j + 1, j);
    }
  }
  return list;
};

// 选择排序
const selectSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) swap(list, i, j);
    }
  }
  return list;
};

// 插入排序，取决于当前的数据排列形式
const insertSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (list[j - 1] > list[j]) swap(list, j, j - 1);
    }
  }
  return list;
};

const swap = (list, index1, index2) => {

  let a = list[index1], b = list[index2];
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  list[index1] = a;
  list[index2] = b;
};


module.exports = {
  bubbleSort,
  selectSort,
  insertSort
};