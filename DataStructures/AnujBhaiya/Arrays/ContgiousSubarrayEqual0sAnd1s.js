// Find largest subarray with equal no of 0s and 1s
//https://www.youtube.com/watch?v=9ZyLjjk536U
// https://www.youtube.com/watch?v=XzwUBIkR9pA&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=28
//Same problem //Function to find a continuous sub-array which adds up to a given number.

function maxSubArrayLength(arr) {
  let map = new Map();
  let currentSum = 0;
  let longestSubArray = 0;
  let ending_index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentSum += 1;
    } else {
      currentSum -= 1;
    }
    if (currentSum === 0) {
      longestSubArray = i + 1;
      ending_index = i;
    } else if (!map.has(currentSum)) {
      map.set(currentSum, i);
    } else {
      let lengthIndex = i - map.get(currentSum) || 0;

      if (longestSubArray < lengthIndex) {
        longestSubArray = lengthIndex;
        ending_index = i;
      }
    }
  }

  console.log("Largest Subarray length is:", longestSubArray);
  console.log(
    "Range from",
    ending_index - longestSubArray + 1,
    "to:",
    ending_index
  );
}

let arr = [1, 0, 1, 1, 1, 0, 0];

maxSubArrayLength(arr);
