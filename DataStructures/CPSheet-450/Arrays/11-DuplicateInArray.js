/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-the-duplicate-number/solutions/1892921/9-approaches-count-hash-in-place-marked-sort-binary-search-bit-mask-fast-slow-pointers/
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

function findDuplicate_fastSlow(nums) {
  let slow = 0;
  let fast = 0;
  console.log("1st Loop");
  do {
    console.log("slow:",slow,"fast:",fast)
      slow = nums[slow];
      fast = nums[nums[fast]];
  } while (slow != fast);

  slow = 0;
  console.log("2nd Loop");
  while (slow != fast) {
    console.log("slow:",slow,"fast:",fast)
      slow = nums[slow];
      fast = nums[fast];
  }
  
  return slow;
}

console.log(findDuplicate_fastSlow([1, 3, 4, 2, 2]));
