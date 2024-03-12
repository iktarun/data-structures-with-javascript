/**
 * Time Complexity O(n)
 * Space Comlexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let major = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      major = nums[i];
      count = 1;
    } else {
      if (major === nums[i]) {
        count++;
      } else {
        count--;
        if (count === 0) {
          major = nums[i];
          count = 1;
        }
      }
    }
  }

  let majorCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === major) {
      majorCount++;
    }
  }

  if (majorCount > parseInt(nums.length) / 2) {
    return major;
  }
};

const res = majorityElement([1, 2, 6, 7, 7, 7, 2, 1, 7, 7, 7, 7]);
console.log("Majority element is:", res);
