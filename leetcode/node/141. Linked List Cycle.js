// https://leetcode.cn/problems/linked-list-cycle/

// eslint-disable-next-line no-unused-vars
const { ListNode } = require("./206. Reverse Linked List");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head) return false;
    let fast = head.next, slow = head;
    let flag = false;
    while(fast !== null && fast.next !== null) {
      if (fast === slow) {
        flag = true;
        break;
      }
      fast = fast.next;
      fast = fast.next;
      slow = slow.next;
    }
    return flag;
};

module.exports = {
  hasCycle
};
