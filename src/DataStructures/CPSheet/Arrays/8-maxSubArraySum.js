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
/**
 * O(n)
 * @param {*} arr
 * @returns arr[]
 */
function maxSubarraySumUsingKadanesAlgorithm(arr) {
  let meh = 0;
  let msf = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    meh = meh + arr[i];
    if (meh < arr[i]) {
      meh = arr[i];
    }
    if (msf < meh) {
      msf = meh;
    }
  }
  return msf;
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubarraySumUsingKadanesAlgorithm(arr));
