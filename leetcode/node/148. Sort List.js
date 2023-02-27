// https://leetcode.cn/problems/sort-list/description/

const { ListNode } = require("./22. last Kth Node");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    fast = fast.next;
  }
  const rightHead = slow.next;
  slow.next = null;
  const leftList = sortList(head);
  const rightList = sortList(rightHead);
  return merge(leftList, rightList);
};

/**
 * 
 * @param {ListNode} left 
 * @param {ListNode} right
 * @return {ListNode} 
 */
var merge = function (left, right) {
  if (left === null) return right;
  if (right === null) return left;
  // 按照归并的思路重新申请一个链表
  let p = new ListNode(0);
  const head = p; // 为了结果返回头部，申请一个指针
  while (left && right) { // 相当于3指针操作
    if (left.val < right.val) {
      p.next = left; // 先设置，再位移
      left = left.next;
    } else {
      p.next = right;
      right = right.next;

    }
    p = p.next;
  }
  if (left) p.next = left;
  if (right) p.next = right;

  return head.next;

};
