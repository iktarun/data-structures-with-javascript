/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let midIndex = -1;
  let alreadySorted = true;

  // Find the index where we find the positive index, also keep squaring the no's
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && midIndex === -1) {
      midIndex = i;
    }
    if (nums[i] < 0 && alreadySorted === true) {
      alreadySorted = false;
    }
    nums[i] *= nums[i];
  }

  console.log("midIndex", midIndex, "alreadySorted:", alreadySorted);

  if (!alreadySorted) {
    //   It means all the no's are negative

    let newArray = [];
    if (midIndex === -1) {
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
      }
      return nums;
    } else {
      let left = midIndex - 1;
      let right = midIndex;

      while (left >= 0 && right < nums.length) {
        if (nums[left] < nums[right]) {
          newArray.push(nums[left--]);
        } else if (nums[left] > nums[right]) {
          newArray.push(nums[right++]);
        } else if (nums[left] === nums[right]) {
          newArray.push(nums[left--]);
          newArray.push(nums[right++]);
        }
      }

      // Copy elements from left
      while (left >= 0) {
        newArray.push(nums[left--]);
      }

      // Copy elements from right
      while (right < nums.length) {
        newArray.push(nums[right++]);
      }

      return newArray;
    }
  } else {
    return nums;
  }
};

var sortedSquares1 = function (nums) {
  let len = nums.length,
    res = new Array(len),
    left = 0,
    right = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    let leftAbs = Math.abs(nums[left]);
    let rightAbs = Math.abs(nums[right]);
    if (leftAbs >= rightAbs) {
      res[i] = leftAbs ** 2;
      left++;
    } else {
      res[i] = rightAbs ** 2;
      right--;
    }
  }
  return res;
};

const arr = [-16, -3, -1, 3, 5];

const res = sortedSquares1(arr);
console.log("res:", res);
