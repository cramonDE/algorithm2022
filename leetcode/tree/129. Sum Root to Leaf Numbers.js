// https://leetcode.cn/problems/sum-root-to-leaf-numbers/

// 求二叉树最大路径和

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function helper(root, value) {
  if (!root) return 0;
  const result = value * 10 + root.val;
  if (!root.left && !root.right) return result;
  return helper(root.left, result) + helper(root.right, result);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return helper(root, 0);
};

module.exports = {
  sumNumbers,
  TreeNode
};
// console.log(sumNumbers([1,2,3]));
// console.log(sumNumbers([4, 9, 0, 5, 1]));