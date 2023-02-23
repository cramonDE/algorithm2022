// https://leetcode.cn/problems/binary-tree-right-side-view/description/

// 输出二叉树的右视图，原理就是层序遍历，然后输出最后的节点即可

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = [], queue = [root];
  while(queue.length !== 0) {

    if(queue[0] === null) {
      queue.shift();
      continue;
    }

    const levelList = [];
    const len = queue.length;
    // 层序遍历的时候先进行队列操作，再删除
    for (let i = 0; i < len; i++) {
      // 遍历的过程也需要去重
      if(queue[i] === null) continue;
      levelList.push(queue[i].val);
      queue.push(queue[i].left);
      queue.push(queue[i].right);
    }

    result.push(levelList[levelList.length - 1]);
    queue.splice(0, len);
  }
  return result;
};