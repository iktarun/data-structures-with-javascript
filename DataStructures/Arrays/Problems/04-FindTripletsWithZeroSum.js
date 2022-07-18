/*
Given an array of integers. Check whether it contains a triplet that sums up to zero. 
Expected Time Complexity: O(n2)
Expected Auxiliary Space: O(1)

*/

function FindTripletsWithZeroSum(arr) {
  let n = arr.length - 1;
  let found = false;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n;
    let x = arr[i];

    while (left < right) {
      if (x + arr[left] + arr[right] === 0) {
        console.log("Triplets found:", x, arr[left], arr[right]);
        left++;
        right--;
        found = true;
      }
      if (x + arr[left] + arr[right] < 0) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }
  return found;
}

let arr = [0, -1, 2, -3, 1];

let sortedArr = arr.sort((a, b) => a - b);
console.log("Input:", sortedArr);
const res = FindTripletsWithZeroSum(sortedArr);
if (res === false) {
  console.log("No triplets found!");
}
