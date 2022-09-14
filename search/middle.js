/**
 * 
 * @param {number[]} list 
 * @param {number} left 
 * @param {number} right 
 * @returns 
 */
const middleSearch = (list, left, right) => {
  if (left === right) return list[left];
  const middle = Math.floor((left + right) / 2); // 可以考虑用减法，大数情况下会溢出
  const leftMax = middleSearch(list, left, middle);
  const rightMax = middleSearch(list, middle + 1, right); // 通常都是向下取整，所以这里 middle+1， right 是闭区间
  return Math.max(leftMax, rightMax);
};

module.exports = {
  middleSearch
};