/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let j = 0;
  let maxElement = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    j = i + 1;
    maxElement = arr[j];

    while (j < arr.length) {
      if (arr[j] > maxElement) {
        maxElement = arr[j];
      }
      j++;
    }
    arr[i] = maxElement;
  }

  arr[arr.length - 1] = -1;
  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];

const res = replaceElements(arr);
console.log(res);
