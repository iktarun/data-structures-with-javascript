// https://www.geeksforgeeks.org/chocolate-distribution-problem/
// https://www.youtube.com/watch?v=GWxslKZWGAk
function chocolateDistribution(arr, m) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  let j = 0;
  let res = Number.MAX_SAFE_INTEGER;
  while (i < arr.length) {
    if (i + m < arr.length) {
      res = Math.min(arr[i + m] - arr[i], res);
    }
    i++;
  }
  return res;
}

let arr = [3, 4, 1, 9, 56, 7, 9, 12];
let m = 5;
console.log("Minimum Difference is:", chocolateDistribution(arr, m - 1));
