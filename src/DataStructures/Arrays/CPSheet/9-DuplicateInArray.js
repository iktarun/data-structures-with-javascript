/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let item of nums) {
    if (nums[Math.abs(item)] < 0) {
      return Math.abs(item);
    } else {
      nums[item] *= -1;
    }
  }
  return -1;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
