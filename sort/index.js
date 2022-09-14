const { getNumberList } = require('../utils/get-list');
const { selectSort, insertSort, bubbleSort } = require('./n^2');

const forkNewList = (list) => new Array(...list);

const exampleList = getNumberList(10, 1000);
console.log('排序前数组：', exampleList);
console.log('选择排序后数组：', selectSort(forkNewList(exampleList)));
console.log('插入排序后数组：', insertSort(forkNewList(exampleList)));
console.log('冒泡排序后数组：', bubbleSort(forkNewList(exampleList)));