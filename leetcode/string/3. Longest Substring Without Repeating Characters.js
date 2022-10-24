// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let start = 0, end = 0;
  let ans = 0;
  const map = new Map();
  for(; end < s.length; end++) {
    if (map.has(s[end])) {     
      start = Math.max(map.get(s[end]), start);
      console.log('start = ', start, end);
    }
    const result = end - start + 1;
    ans = Math.max(result, ans);
    map.set(s[end], end+ 1);
    
  }
  return ans;
};

module.exports = {
  lengthOfLongestSubstring
};


console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('abba')); // 有两个b出现，start 的位置已经变化，因此需要进行大小的对比