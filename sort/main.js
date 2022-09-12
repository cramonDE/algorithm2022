const { selectSort, insertSort, bubbleSort } = require('./n^2');

const getList = (length, range) => {
  return new Array(length).fill(0).map(() => Math.floor(Math.random() * range))
}

const forkNewList = (list) => new Array(...list);

const exampleList = getList(10, 1000);
console.log('选择排序后数组：', selectSort(forkNewList(exampleList)));
console.log('插入排序后数组：', insertSort(forkNewList(exampleList)));
console.log('冒泡排序后数组：', bubbleSort(forkNewList(exampleList)));