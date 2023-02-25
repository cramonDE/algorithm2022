// https://leetcode.cn/problems/reorder-list/description/

// 链表操作，先按照递归的做法

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head == null || head.next == null) return ;
  let prev = head;
  // 找到最后的节点的前一个
  while(prev.next && prev.next.next) {
    prev = prev.next;
  }
  // 拼接头尾

  // 涉及到链表递归问题的难点，这里通过声明最后一个元素作为媒介，串起整个链表
  const lastNode = prev.next;
  prev.next = null;
  lastNode.next = head.next;
  head.next = lastNode;
  reorderList(lastNode.next);
};


/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// eslint-disable-next-line no-redeclare
var reorderList = function(head) {
  let slow = head, fast = head;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next;
    fast = fast.next;
  }
  // 确保 fast 到了最后一个指针了
  if (fast.next) fast = fast.next;
  console.log(slow.val, fast.val);

  // 逆序后半部分
  let preview = null, current = slow;
  while( current ) {
    const nextPtr = current.next;
    current.next = preview;
    preview = current;
    current = nextPtr;
  }

  // 合并两个链表

  let temp1, temp2, l1 = head, l2 = fast;
  while(l1 && l2) {
    temp1 = l1.next;
    temp2 = l2.next;
    l1.next = l2;
    l1 = temp1;

    l2.next = l1;
    l2 = temp2;
  }
};


