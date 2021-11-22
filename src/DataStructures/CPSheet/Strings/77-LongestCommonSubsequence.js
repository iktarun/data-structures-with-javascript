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
}
