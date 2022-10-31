// https://leetcode.cn/problems/reverse-linked-list/description/


function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null;
  let current = head;
  let preview = null;
  while(current !== null) {
    let temp = current.next;
    current.next = preview;
    preview = current;
    current = temp;
  }
  return preview;
};

module.exports = {
  reverseList,
  ListNode
};