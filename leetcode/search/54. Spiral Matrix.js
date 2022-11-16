// https://leetcode.cn/problems/spiral-matrix/description/
// https://leetcode.cn/problems/spiral-matrix/solutions/275393/luo-xuan-ju-zhen-by-leetcode-solution/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const resultList = [];
  if (matrix.length === 0 || matrix[0].length === 0) return resultList;
  let up = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  let flag = true;
  while(flag) {

    for(let i = up; i <= right; i++) {
      // console.log(matrix[left][i]);
      resultList.push(matrix[left][i]);
    }
    // console.log(resultList);
    if ( up++ === bottom) break;
    for(let i = up; i <= bottom; i++) {
      // console.log(matrix[i][right]);
      resultList.push(matrix[i][right]);
    }
    // console.log(resultList);
    if ( right-- === left) break;
    for(let i = right; i >= left; i--) {
      // console.log(matrix[bottom][i]);
      resultList.push(matrix[bottom][i]);
    }
    // console.log(resultList);
    if (bottom -- === up) break;
    for(let i = bottom; i >= up; i--) {
      // console.log(matrix[i][left]);
      resultList.push(matrix[i][left]);
    }
    // console.log(resultList);

    if (left++ === right) break;

  }
  return resultList;
};

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
module.exports = {
  spiralOrder
};
