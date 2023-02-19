// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/

// 判断链表 a，b 是否相交，两个链表分别走 a + b，b + a，看是否有交点即可

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pa = headA, pb = headB;
    while(pa !== pb) {
      // 在这里要先判断 pa ， pb === null,，不然会死循环
      pa = pa ? pa.next : headB;
      pb = pb ? pb.next : headA;
    }
    return pa;
};
