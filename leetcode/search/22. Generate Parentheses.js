https://leetcode.cn/problems/generate-parentheses/description/?favorite=2cktkvj

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const resultList = [];
  dfs(resultList, '', n , n);
  return resultList;
};

/**
 * 深搜   
 * @param {string[]} resultList 储存的结果集
 * @param {string} result 当前分支的结果
 * @param {number} leftNumber 左括号剩余数量
 * @param {number} rightNubmer 右括号剩余数量
 */
function dfs(resultList, result, leftNumber, rightNubmer) {
  // 1. 处理返回结果
  if (leftNumber === 0 && rightNubmer === 0) {
    resultList.push(result);
    return;
  }
  // 2. 处理剪枝

  if (rightNubmer < leftNumber) {
    return;
  }

  // 3. 正常递归

  if (leftNumber > 0) {
    dfs(resultList, result + '(', leftNumber - 1, rightNubmer);
  }

  if (rightNubmer > 0) {
    dfs(resultList, result + ')', leftNumber, rightNubmer - 1);
  }

}

module.exports = {
  generateParenthesis
};
