const { getNumberList } = require('../utils/get-list');
const { middleSearch } = require('./middle');

const exampleList = getNumberList(10, 1000);
console.log('原数组：', exampleList);
console.log('二分查找最大的元素', middleSearch(exampleList, 0, 9));
