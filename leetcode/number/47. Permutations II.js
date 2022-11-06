// https://leetcode.cn/problems/permutations-ii/description/

const { forkNewList } = require("../../utils/get-list");
const { swap } = require("../../utils/swap");


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  const result = [];
  nums.sort();
  dfs(result, nums, 0);
  return result;
};

function dfs(resultList, result, currentIndex) {
  
  if (currentIndex === result.length) {
    const newList= forkNewList(result);
    resultList.push(newList);
    return;
  }

  const set = new Set();
  for(let i = currentIndex; i < result.length; i++) {
    if (set.has(result[i])) {
      continue;
    }

    set.add(result[i]); // 这里  set 记录的时候要在交换之前
    swap(result, currentIndex, i);
    dfs(resultList, result, currentIndex + 1);
    swap(result, currentIndex, i);
    
  }
}

module.exports = {
  permuteUnique
};


// console.log(permuteUnique([1,1,2]));
// console.log(permuteUnique([1,2,3]));
// console.log(permuteUnique([2,2,1,1]));
console.log(permuteUnique([1,2,2,2]));