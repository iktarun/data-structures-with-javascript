/**
 * Approach1:
 * We will iterate through the length of min string
 * Break condition, if char does not match in all the strings
Time Complexity: O(No of strings * length of min string) 

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

function findMinLength(arr, n) {
  let min = arr[0].length;
  for (let i = 1; i < n; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }

  return min;
}

var longestCommonPrefix = function (arr) {
  let n = arr.length;
  let minlen = findMinLength(arr, n);
  let result = ""; // Our resultant string
  let current; // The current character
  for (let i = 0; i < minlen; i++) {
    // Current character (must be same
    // in all strings to be a part of
    // result)
    current = arr[0][i];

    for (let j = 1; j < n; j++) {
      if (arr[j][i] != current) {
        return result;
      }
    }

    // Append to result
    result += current;
  }

  return result;
};

let strs = ["flower", "flow", "flight"];

let res = longestCommonPrefix(strs);
console.log(" Longest Common Prefix is:", res);

/***
 * Approach2:
 *
 *
 */
