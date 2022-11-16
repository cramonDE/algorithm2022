// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/

// eslint-disable-next-line no-unused-vars
const { TreeNode } = require("./129. Sum Root to Leaf Numbers");


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 var kthSmallest = function(root, k) {
  const stack = [];
  while(root !== null || stack.length !== 0) {
    while(root !== null ) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // console.log('pop value', root.val);
    k--;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
};

module.exports = {
  kthSmallest
};
