const { forkNewList } = require("../utils/get-list");
const { swap } = require("../utils/swap");


/**
 * 
 * @param {number[]} inputList 
 * @returns 
 */
function heapSort(inputList) {
  const list = forkNewList(inputList);
  list.forEach((_element, index) => {
    heapInsert(list, index);
  });
  // printHeap(list);
  let length = list.length;

  while( length--) {
    swap(list, 0, length); // 每次排完了，放到最后面，重新执行 heapify
    heapify(list, length);
  }
  return list;
}

/**
 * 要从下至上插入堆中
 * @param {number[]} list 
 * @param {number} index 
 */
function heapInsert(list, index) {
  let currentIndex  = index;
  while(list[getFatherIndex(currentIndex)] < list[currentIndex]) {
    swap(list, getFatherIndex(currentIndex), currentIndex);
    currentIndex =  getFatherIndex(currentIndex);
  }
}
/**
 * 每次都从堆顶往下移动
 * @param {number[]} list 
 * @param {number} end 数组的终点，左闭右开区间
 */
function heapify(list, end) {
  let leftChild = getLeftChildIndex(0);
  let rightChild = getRightChildIndex(0);
  while(leftChild < end) {
    let largeIndex = leftChild;
    let largeValue = list[leftChild];

    if (rightChild < end) {
      // 1. 如果存在右节点，且大于左节点，设置最大子节点的坐标和值
      if (largeValue < list[rightChild]) {
        largeIndex = rightChild;
        largeValue = list[rightChild];
      }
    }
    // 2. 父节点小于子节点，要进行交换
    if (list[getFatherIndex(largeIndex)] < largeValue) {
      // 这里重新计算了父亲的坐标，一直循环
      swap(list, getFatherIndex(largeIndex), largeIndex);
      leftChild = getLeftChildIndex(largeIndex);
      rightChild = getRightChildIndex(largeIndex);
    } else {
      break; 
    }
  }
}

// eslint-disable-next-line no-unused-vars
function printHeap(inputList) {
  if (inputList.length === 0) return;
  const outputList = [];
  let index = 0;
  while(index < inputList.length) {
    outputList.push(index);
    index = index * 2 + 2; // 把右节点的下标放到数组当中
  }
  let output = '';
  inputList.forEach((element, index) => {
    output = output + element + '\t';
    if (outputList.includes(index)) {
      output += '\n';
    }
  });
  console.log('打印当前堆的结果 ->\n\n' + output + '\n');
}

function getFatherIndex(index) {
  return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index) {
  return index * 2 + 1;
}

function getRightChildIndex(index) {
  return index * 2 + 2;
}

module.exports = {
  heapSort
};