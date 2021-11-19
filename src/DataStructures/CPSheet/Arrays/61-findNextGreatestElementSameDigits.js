/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (num) {
  let arr = num.toString().split("");
  let n = arr.length;
  if (n == 2) {
    if (arr[0] < arr[1]) {
      return arr[1] + arr[0];
    }
  } else if (n > 2) {
    for (let i = 0; i < n; i++) {}
  }

  return -1;
};

console.log(nextGreaterElement(230241));
