// Approach 2 can be using sorting

/**
 * Method1: Compare each element
 * @param {*} a
 * @param {*} n
 * @returns
 */

function minMaxElementInArray(a, n) {
  if (n === 0) {
    return;
  }
  let minMax = { min: 0, max: 0 };
  minMax.min = a[0];
  minMax.max = a[0];
  if (n === 1) {
    return minMax;
  }

  for (let i = 1; i < n; i++) {
    if (a[i] < minMax.min) {
      minMax.min = a[i];
    }

    if (a[i] > minMax.max) {
      minMax.max = a[i];
    }
  }

  return minMax;
}

let arr = [3, 10, 20, 4, 1];

console.log(minMaxElementInArray(arr, arr.length));
