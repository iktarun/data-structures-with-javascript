var numIdenticalPairs = function (nums) {
  let result = 0;
  nums.forEach((number, index) => {
    console.log("uper1:", index);
    index = nums.indexOf(number, index + 1);
    console.log("uper2:", index);
    while (index > 0) {
      console.log("inner:", index);
      result++;
      index = nums.indexOf(number, index + 1);
    }
  });
  return result;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
