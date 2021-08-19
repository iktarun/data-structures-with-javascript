var twoSum = function (nums, target) {
  let hash = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  console.log(hash);

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash && i !== hash[target - nums[i]]) {
      res.push(i);
      res.push(hash[target - nums[i]]);
      break;
    }
  }
  return res;
};

var twoSumMethod2 = function (arr, target) {
  let hash = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = target - arr[i];
    console.log(item);
    if (hash[item] !== undefined) {
      result.push(i);
      result.push(hash[item]);
      break;
    } else {
      hash[arr[i]] = i;
    }
  }

  // if (target - nums[i] in hash && i !== hash[target - nums[i]]) {
  //   res.push(i);
  //   res.push(hash[target - nums[i]]);
  //   break;
  // }
  return result;
};

console.log(twoSumMethod2([3, 2, 4], 6));
