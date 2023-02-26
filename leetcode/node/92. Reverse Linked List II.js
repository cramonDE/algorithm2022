// https://leetcode.cn/problems/reverse-linked-list-ii/

const { ListNode } = require("./206. Reverse Linked List");


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

  if (left === right) return head;
  // 涉及头节点操作还是构造一个空的头部出来，方便收敛处理
  const hair = new ListNode(0, head);
  let prevLeft = hair, nextRight = head;

  for (let i = 0; i < left - 1; i++) {
    prevLeft = prevLeft.next;
  }

  for (let i = 0; i < right; i++) {
    nextRight = nextRight.next;
  }

  const returnNode = reserve(prevLeft.next, right - left + 1);
  prevLeft.next.next = nextRight; // 先改掉尾部
  prevLeft.next = returnNode; // 再将头部连接起来
  return hair.next;

};

/**
 * 
 * @param {ListNode} head 
 * @param {number} len 
 * @returns {ListNode} 
 */
function reserve(head, len) {
  let prev = null, current = head;
  for (let i = 0; i < len; i++) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}