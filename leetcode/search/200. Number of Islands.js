// https://leetcode.cn/problems/number-of-islands/description/

/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      // 特殊位置进行计数，之前已经走过的状态已经被标记过了
      if (grid[i][j] === '1')
        result++;
      dfs(grid, i, j);
    }
  }
  // console.log(grid);
  return result;
};

/**
 * 
 * @param {string[][]} grid 
 * @param {number} row 
 * @param {number} column 
 */
function dfs(grid, row, column) {
  if (!isInArea(grid, row, column)) return;
  // console.log({row});
  // console.log({column});
  if (grid[row][column] === '0') return;
  if (grid[row][column] === '2') return;

  grid[row][column] = '2';
  dfs(grid, row - 1, column);
  dfs(grid, row + 1, column);
  dfs(grid, row, column + 1);
  dfs(grid, row, column - 1);

}


/**
 * 
 * @param {string[][]} grid 
 * @param {number} row 
 * @param {number} column 
 * @returns {boolean}
 */
function isInArea(grid, row, column) {
  return column >= 0 && row >= 0 && column < grid[0].length && row < grid.length;
}


console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]));

console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));


module.exports = {
  numIslands
};
