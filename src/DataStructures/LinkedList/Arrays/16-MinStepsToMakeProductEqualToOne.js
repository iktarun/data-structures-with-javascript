function makeProductOne(arr, n) {
  //code here

  let steps = 0;

  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zeros += 1;
    } else if (arr[i] > 0) {
      steps += arr[i] - 1;
    } else if (arr[i] < 0) {
      steps = steps + (-1 - arr[i]);
      negatives += 1;
    }
  }

  if (negatives % 2 === 0) {
    steps += zeros;
  } else {
    if (zeros > 0) {
      steps += zeros;
    } else {
      steps += 2;
    }
  }

  return steps;
}

let arr = [-2, 4, 0];
const res = makeProductOne(arr, arr.length);
console.log("res:", res);
