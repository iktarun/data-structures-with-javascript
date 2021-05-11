//Function to find a continuous sub-array which adds up to a given number.
function subarraySum(arr, n, s) {
  //your code here
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < n) {
    currentSum += arr[right];

    if (currentSum === s) {
      return [left, right];
    }

    if (currentSum < s) {
      right++;
    } else {
      currentSum = currentSum - arr[left];
      left++;
      if (currentSum === s) {
        return [left, right];
      }
    }
  }
  return -1;
}

const res = subarraySum([1, 2, 3, 7, 5], 5, 0);
console.log(res);
