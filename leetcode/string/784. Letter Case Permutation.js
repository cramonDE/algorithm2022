// https://leetcode.cn/problems/letter-case-permutation/

function isLowerLetter(a) {
  return  (a >= 'a' && a <= 'z');
}

function isUpperLetter(a) {
  return  (a >= 'A' && a <= 'Z');
}

function isNumber(a) {
  return  (a >= '0' && a <= '9');
}


/**
 * 
 * @param {string} str 
 * @param {number} index 
 * @param {string} char 
 */
function replaceStringChar(str, index, char) {
  const stringList = str.split('');
  stringList[index] = char;
  return stringList.join('');
}



/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const resultList = [];
  dfs(resultList, s, 0);
  return resultList;
};

function dfs(resultList, result, currentIndex) {
  if (result.length === currentIndex) {
    resultList.push(result);
  }

  if (isNumber(result[currentIndex])) {
    dfs(resultList, result, currentIndex+1);
  }

  if (isLowerLetter(result[currentIndex])) {
    dfs(resultList, result, currentIndex+1);
    dfs(resultList, replaceStringChar(result, currentIndex, (result[currentIndex]).toLocaleUpperCase()), currentIndex+1);
  }

  if (isUpperLetter(result[currentIndex])) {
    dfs(resultList, result, currentIndex+1);
    dfs(resultList, replaceStringChar(result, currentIndex, (result[currentIndex]).toLocaleLowerCase()), currentIndex+1);
  }
  
}

console.log(letterCasePermutation('a1b2'));
console.log(letterCasePermutation('3z4'));

module.exports = {
  letterCasePermutation
};