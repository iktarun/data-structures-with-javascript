// Learn Algo Abdul Bari: https://www.youtube.com/watch?v=sSno9rV8Rhg

/**
 * @param {number} x
 * @param {number} y
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */

class Solution {
  //Function to find the length of longest common subsequence in two strings.
  lcs(x, y, s1, s2) {
    // code here
    if (s1.length === 1 || s2.length === 1) {
      return 0;
    }
    if (x === 0 || y === 0) {
      return 0;
    }
    if (s1[x] === s2[y]) {
      return 1 + this.lcs(x - 1, y - 1, s1, s2);
    }

    if (s1[x] !== s2[y]) {
      return Math.max(this.lcs(x, y - 1, s1, s2), this.lcs(x - 1, y, s1, s2));
    }
  }
  // Use this instead, Forget about the above one
  lcsUsingDP(m, n, s1, s2, dp) {
    // code here
    if (m === 0 || n === 0) {
      return 0;
    }
    if (s1[m] === s2[n]) {
      return (dp[m][n] = 1 + this.lcs(m - 1, n - 1, s1, s2));
    }

    if (dp[m][n] != -1) {
      return dp[m][n];
    }

    if (s1[m] !== s2[n]) {
      return (dp[m][n] = Math.max(
        this.lcs(m, n - 1, s1, s2),
        this.lcs(m - 1, n, s1, s2)
      ));
    }
  }
}

let obj = new Solution();
let X = "ABCDGH";
let Y = "ACDGHR";
let m = X.length;
let n = Y.length;
let dp = new Array(m + 1);
for (let i = 0; i < m + 1; i++) {
  dp[i] = new Array(n + 1).fill(-1);
}

let res = obj.lcs(m, n, X, Y, dp);
console.log("Length of longest common seubsequence is:", res);
