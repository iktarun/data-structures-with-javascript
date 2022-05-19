// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
function TrappingRainWaterProblem(arr, n) {
  let left = 1;
  let right = n - 2;
  let leftMax = arr[0];
  let rightMax = arr[n - 1];
  let sum = 0;

  while (left <= right) {
    if (leftMax <= rightMax) {
      let add = leftMax - arr[left];
      if (add > 0) {
        sum += add;
      }
      if (arr[left] > leftMax) {
        leftMax = arr[left];
      }

      left++;
    } else if (leftMax > rightMax) {
      let add = rightMax - arr[right];
      if (add > 0) {
        sum += add;
      }
      if (arr[right] > rightMax) {
        rightMax = arr[right];
      }
      right--;
    }
  }
  console.log("Total water:", sum);
}

const arr = [3, 0, 2, 0, 4];

TrappingRainWaterProblem(arr, arr.length);
