// https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head, fast = head;
  while(k--) {
    fast = fast.next;
  }
  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

module.exports = {
  getKthFromEnd,
  ListNode
};