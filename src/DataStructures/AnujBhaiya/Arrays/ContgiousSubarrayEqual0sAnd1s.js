// Find largest subarray with equal no of 0s and 1s
//https://www.youtube.com/watch?v=9ZyLjjk536U
// https://www.youtube.com/watch?v=XzwUBIkR9pA&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=28
//Same problem //Function to find a continuous sub-array which adds up to a given number.

function subArrayCount(arr) {
  let map = new Map();
  let currentSum = 0;
  let longestSubArray = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentSum += 1;
    } else {
      currentSum -= 1;
    }
    if (currentSum === 0) {
      longestSubArray = i + 1;
    } else if (!map.has(currentSum)) {
      map.set(currentSum, i);
    } else {
      let lengthIndex = i - map.get(currentSum) || 0;
      longestSubArray =
        longestSubArray < lengthIndex ? lengthIndex : longestSubArray;
    }
  }

  console.log("Largest Subarray length is:", longestSubArray);
}

let arr = [1, 1, 0, 0, 0, 0, 1, 1];

subArrayCount(arr);
