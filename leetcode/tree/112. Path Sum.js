// https://leetcode.cn/problems/path-sum/description/

// eslint-disable-next-line no-unused-vars
const { TreeNode } = require("./129. Sum Root to Leaf Numbers");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  if (targetSum === root.val && !root.left && !root.right) return true; // 满足当前的值，且为叶子结点才为 true
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

module.exports = {
  hasPathSum
};