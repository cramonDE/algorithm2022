// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/

// eslint-disable-next-line no-unused-vars
const { TreeNode } = require("./129. Sum Root to Leaf Numbers");


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  const result = [];
  const queue = [root];
  while(queue.length !== 0) {
    const depthList = [];
    if (queue[0] === null) { // 判空操作会发生在两个地方
      queue.shift();
      continue;
    }
    const length = queue.length; // 这里先记录一下长度，将这个队列全部清空
    for(let i = 0; i < length; i++) {
      if (queue[i] === null) {
        continue;
      }
      depthList.push(queue[i].val);
      queue.push(queue[i].left);
      queue.push(queue[i].right);
      
    }
    result.push(depthList);
    queue.splice(0, length);
  }

  return result;
};

module.exports = {
  levelOrder
};