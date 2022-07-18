/**
 * O(N^2)
 * Using 2 loops
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 * https://www.geeksforgeeks.org/maximum-product-subarray/
 */
function swap(from, to) {
  let temp = to;
  to = from;
  from = temp;
  return { from, to };
}
function maxProduct(arr, n) {
  // Initializing result
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    let mul = arr[i];
    // traversing in current subarray
    for (let j = i + 1; j < n; j++) {
      // updating result every time
      // to keep an eye over the maximum product
      result = Math.max(result, mul);
      mul *= arr[j];
    }
    // updating the result for (n-1)th index.
    result = Math.max(result, mul);
  }
  return result;
}

/**
 * O(n)
 * @param {*} arr
 * @returns arr[]
 * Giving wrong output for some inputs
 */
function maxProductUsingKadanesAlgorithm(arr) {
  let ans = arr[0];
  let ma = (mi = ans);

  let n = arr.length;

  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = ma;
      ma = mi;
      mi = temp;
    }
    ma = Math.max(arr[i], ma * arr[i]);
    mi = Math.max(arr[i], mi * arr[i]);

    ans = Math.max(ans, ma);
  }
  return ans;
}

// This is the most optimized solution O(n). Here we will run 2 loops one from start and another from end of array
// Its similar to Kadanes algoritm with minor changes, looks carefully
// case1: if 0 then start multiplyRes = 1
// case 2: if -ve dont do anything just process
function maxProductSolution2(nums, len) {
  let ans = Number.MIN_SAFE_INTEGER;
  let m = 1;
  // Loop from start
  for (let i = 0; i < nums.length; i++) {
    m *= nums[i];
    ans = Math.max(ans, m);
    if (m == 0) m = 1;
  }
  let n = 1;
  // Loop from end of array
  for (let i = nums.length - 1; i >= 0; i--) {
    n *= nums[i];
    ans = Math.max(ans, n);
    if (n == 0) n = 1;
  }
  return ans;
}

// let arr = [1, -2, -3, 0, 7, -8, -2];
// let arr = [1, -3, -10, 0, 60];
let arr = [-2, 40, 4, -2, -3];
console.log(maxProductSolution2(arr, arr.length));
