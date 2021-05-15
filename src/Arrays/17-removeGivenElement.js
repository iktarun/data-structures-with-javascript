var removeElement = function (nums, val) {
  var shiftArray = function (nums, i) {
    for (let j = i; j < nums.length; j++) {
      nums[j] = nums[j + 1];
    }
  };

  let length = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === undefined) {
      break;
    }
    console.log("Before i", i, nums, "length:", length);
    if (nums[i] === val) {
      shiftArray(nums, i);
    } else {
      length++;
      i++;
    }
    console.log("After i", i, nums, "length:", length);
  }
  return length;
};

const nums = [3, 2, 2, 3];
const res = removeElement(nums, 3);

nums.length = res;
console.log(nums);
