const { getNumberList } = require('../utils/get-list');
const { heapSort } = require('./heap-sort');
const { mergeSort } = require('./merge-sort');
const { selectSort, insertSort, bubbleSort } = require('./n^2');
const { quickSort } = require('./quick-sort');


const exampleList = getNumberList(20, 1000);
console.log('排序前数组：', exampleList);
console.log('选择排序后数组：', selectSort(exampleList));
console.log('插入排序后数组：', insertSort(exampleList));
console.log('冒泡排序后数组：', bubbleSort(exampleList));
console.log('归并排序后数组：', mergeSort(exampleList));
console.log('快速排序后数组：', quickSort(exampleList));
console.log('堆排序后数组：', heapSort(exampleList));


