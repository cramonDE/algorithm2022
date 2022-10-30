// https://leetcode.cn/problems/add-strings/description/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let maxLen = Math.max(num1.length, num2.length);
  const num1Len = num1.length;
  const num2Len = num2.length;
  for(let i = 0; i < maxLen - num1Len; i++) {
    num1 = `0${num1}`;
  }
  for(let i = 0; i < maxLen - num2Len; i++) {
    num2 = `0${num2}`;
  }
  let carry = 0, result = '';
  for(let i = maxLen - 1; i >= 0; i--) {
    const numResult = Number(num1[i]) + Number(num2[i]) + carry;
    carry = Math.floor(numResult / 10);
    result = `${numResult % 10}${result}`;
  }
  if (carry) {
    result = `1${result}`;
  }
  return result;
};

console.log(addStrings('123456789', '987654321'));