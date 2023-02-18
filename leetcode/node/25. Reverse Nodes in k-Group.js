// https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
// https://leetcode.cn/problems/reverse-nodes-in-k-group/solutions/248591/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * 
 * }
 */

function SingleListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {SingleListNode} head
 * @param {number} k
 * @return {SingleListNode}
 */
var reverseKGroup = function(head, k) {
  const hair = new SingleListNode(0, head);
  let pre = hair, tail = hair;
  // 在每次循环当中不断修改内部和外部的指针指向
  while(head !== null) {
    for (let index = 0; index < k; index++) {
      tail = tail.next;
      if (tail === null) return hair.next;
    }

    let nextNode = tail.next;
    const result = reserveList(head, tail);
    head = result[0];
    tail = result[1];
    pre.next = head;
    tail.next = nextNode;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};

var reserveList = function(head, tail) {
  let prev = tail.next, p = head;
  while(prev !== tail) {
    const nextNode = p.next;
    p.next = prev;
    prev = p;
    p = nextNode;
  }
  return [tail, head];
};

module.exports = {
  reverseKGroup
};
