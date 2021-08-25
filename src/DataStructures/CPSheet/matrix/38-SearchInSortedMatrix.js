/***
 * Diffenet methods
 * Method1: loop through each and every element in the array
 *    Time Complexity: O(n^2)
 *
 * Method2: Store an array in a single dimension array, and they perform binay
 * search on top of that
 *  Time Complexity: O(n^2), Space Comlexity: O(n)
 *
 *
 * Method3: Loop through row wise and check first and last element of
 * that row. If found then traverse only that row
 * Time Complexity O(m + logn) => logn for performing binary search
 */

/** Method 4: O(n)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let M = matrix.length;
  let N = matrix[0].length;
  let R = 0;
  let C = N - 1;
  while (R < M && C >= 0) {
    if (matrix[R][C] === target) {
      return true;
    } else if (target > matrix[R][C]) {
      R++;
    } else {
      C--;
    }
  }
  return false;
};

let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 121;

console.log(searchMatrix(arr, target));
