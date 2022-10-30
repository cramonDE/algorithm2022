
/**
   * 
   * @param {number[]} list 
   * @param {number} index1 
   * @param {number} index2 
   */
function swap(list, index1, index2) {
  if (index1 === index2) return;
  let a = list[index1], b = list[index2];
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  list[index1] = a;
  list[index2] = b;
}

module.exports = {
  swap
};