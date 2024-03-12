function smallestSubWithSum(arr, n, x) {
  let i = 0;
  let j = 0;
  let currentSum = 0;
  let minLength = n + 1;
  while (j < n && i < n) {
    while (currentSum <= x && j < n) {
      currentSum += arr[j++];
    }
    console.log(i, j, currentSum);

    while (currentSum > x && i < n) {
      minLength = Math.min(minLength, j - i);
      currentSum -= arr[i++];
    }
  }
  return minLength;
}

let arr1 = [2, 4, 45, 6, 10, 19];
let x = 51;
let n1 = arr1.length;
let res1 = smallestSubWithSum(arr1, n1, x);
console.log("MinLength sumarray is:", res1);
