// https://leetcode.cn/problems/lru-cache/description/
// https://leetcode.cn/problems/lru-cache/solutions/12711/lru-ce-lue-xiang-jie-he-shi-xian-by-labuladong/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

  this.map = new Map();
  this.cacheListNode = new DoubleList();
  this.cap = capacity;

  // 私有方法
  /**
   * 
   * @param {number} key 
   * @param {ListNode} node 
   */
  this.addKeyNode = (key, node) => {
    this.map.set(key, node);
    this.cacheListNode.push(node);
  };


  /**
   * 
   * @param {number} key 
   * @returns 
   */
  this.deleteKey = (key) => {
    if (!this.map.has(key)) return;
    const node = this.map.get(key);
    this.map.delete(key);
    this.cacheListNode.remove(node);
  };

  /**
   * 
   * @param {number} key 
   * @param {ListNode} node
   */
  this.updateKey = (key, node) => {
    this.deleteKey(key);
    this.addKeyNode(key, node);
  };


};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  const node = this.map.get(key);
  this.updateKey(key, node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    // 更新的时候不仅要更新 key， 还要更新 value 的值
    const node = new ListNode(key, value);
    this.updateKey(key, node);
    return;
  }

  if (this.cap === this.cacheListNode.getSize()) {
    const deleteNode = this.cacheListNode.head.next;
    // 容量满了，删除头节点
    this.deleteKey(deleteNode.key);
  }
  
  const newNode = new ListNode(key, value);
  this.addKeyNode(key, newNode);

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// 使用哈希表+双向链表实现LRU更新机制

/**
 * 
 * @param {number} key 
 * @param {number} value 
 */
function ListNode(key, value) {
  this.prev = null;
  this.next = null;
  this.val = value;
  this.key = key;
}

class DoubleList {

  // 作为双向链表的头尾，需要初始化两个指针，一个指向头，一个指向尾
  constructor() {
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  /**
   * 
   * @param {ListNode} node 
   */
  push(node) {
    // 1. 设置新节点的指针 
    node.prev = this.tail.prev;
    node.next = this.tail;
    // 2. 修改旧尾节点的指针指向
    this.tail.prev.next = node;
    // 3. 修改尾指针指向
    this.tail.prev = node;
    this.size++;
  }

  /**
   * 
   * @param {ListNode} node 
   */
  remove(node) {

    if (node === this.tail) return null;
    // 特别注意这里双向链表的删除
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
    return node;
  }


  getSize() {
    return this.size;
  }

}