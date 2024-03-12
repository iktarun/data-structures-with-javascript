/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let item of nums) {
    if (nums[Math.abs(item)] < 0) {
      return Math.abs(item);
    } else {
      /** case: If we dont use Math.abs(item) in the below, it can cause the trouble
         * Input
            [1,2,2]
            Output
            -1
            Expected
            2
             nums[item] *= -1;
         */
      nums[Math.abs(item)] *= -1;
    }
  }
  return -1;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
