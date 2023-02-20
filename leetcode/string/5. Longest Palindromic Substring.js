// https://leetcode.cn/problems/longest-palindromic-substring/description/

// https://leetcode.cn/problems/longest-palindromic-substring/solutions/7792/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/
// 关于回文的题目出了采用中心扩散法之后，可以通过动态规划填表解决


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let answer = s[0];
  const dp = new Array(s.length).fill([]).map(list => new Array(s.length).fill(false));
  // 动态规划构建二维数组
  for (let i = 0; i < s.length; i++) {
    // 进行初始化，i 为右边界

    for (let j = 0; j <= i; j++) {
      const len = i - j + 1;

      if (s[j] === s[i] && (len <= 2 || dp[j + 1][i - 1])) {

        // 这里把标记的条件和和初始化放一起，兼容了一个元素，两个元素，三个元素的情况

        dp[j][i] = true;
        if (i - j + 1 > answer.length) {
          answer = s.substring(j, i + 1);
        }
      }
    }
  }

  return answer;
};