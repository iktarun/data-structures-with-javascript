/**
 * Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
 * @param {*} arr
 * @returns arr[]
 * Time Complexity: O(n^2)
 */
function maxSubarraySum(arr) {
  let totalSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    totalSum = 0;
    for (let j = 0; j < arr.length; j++) {
      totalSum += arr[j];
      if (totalSum > maxSum) {
        maxSum = totalSum;
      }
    }
  }
  return maxSum;
}

let arr = [-1, -2, -3, -4];
console.log(maxSubarraySum(arr));
