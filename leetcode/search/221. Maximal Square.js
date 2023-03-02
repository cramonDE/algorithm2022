// https://leetcode.cn/problems/maximal-square/description/

// https://leetcode.cn/problems/maximal-square/solutions/44586/li-jie-san-zhe-qu-zui-xiao-1-by-lzhlyle/

/**
 * @param {string[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  if (row === 0 || col === 0) return 0;
  const dp = new Array(row + 1).fill([]).map(list => new Array(col + 1).fill(0));
  let result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j+1]) + 1;
        result = Math.max(result, dp[i + 1][j + 1]);
      }
    }
  }
  return result * result;
};