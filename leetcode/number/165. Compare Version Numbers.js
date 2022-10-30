// https://leetcode.cn/problems/compare-version-numbers/description/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const aVersionList = version1.split('.').map(value => Number(value));
  const bVersionList = version2.split('.').map(value => Number(value));
  
  if(aVersionList.length > bVersionList.length) {
    for(let i = 0; i <= aVersionList.length - bVersionList.length; i++) {
      bVersionList.push(0);
    }
  } 

  if(aVersionList.length < bVersionList.length) {
    for(let i = 0; i <= bVersionList.length - aVersionList.length; i++) {
      aVersionList.push(0);
    }
  }

  for(let i = 0; i < aVersionList.length; i++) {
    if (aVersionList[i] > bVersionList[i]) {
      return 1;
    }
    if (aVersionList[i] < bVersionList[i]) {
      return -1;
    }
  }

  return 0;
};

module.exports = {
  compareVersion
};