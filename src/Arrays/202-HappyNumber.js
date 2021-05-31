/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, hash = {}) {
  if (n === 1) {
    return true;
  }

  let arr = [];
  while (n > 0) {
    arr.push(n % 10);
    n = parseInt(n / 10);
  }

  let sum = arr.reduce((s, a) => s + a * a, 0);
  if (!hash[sum]) {
    hash[sum] = sum;
  } else {
    return false;
  }

  return isHappy(sum, hash);
};
console.log(isHappy(2));
