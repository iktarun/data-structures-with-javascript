// Kadane's Algorithm | Largest Sum Contiguous Subarray

function largestSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  console.log("Max subarray sum is:", maxSum);
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
const res = largestSum(arr);
