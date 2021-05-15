/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  let index = -1;
  while (left <= right) {
    mid = parseInt(left + (right - left) / 2);
    console.log("here");
    if (nums[mid] === target) {
      index = mid;
      return mid;
      //   break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  console.log(left, right);
  if (index === -1) {
    return left;
  }
  return index;
};

let arr = [1, 3, 5, 6];
const res = searchInsert(arr, 5);
console.log(res);
