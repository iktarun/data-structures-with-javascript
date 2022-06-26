/**
 *
 * @param {*} arr
 * @returns
 * @desc:  Logic is very simple,
 * Step1: Copy all the k size elements from the end of array
 * Step2: Copy elements from start + k index
 * Step3: Copy the step1 elements from the begining
 *
 */

function cyclicallyRotateAnArray(arr) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = temp;
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(cyclicallyRotateAnArray(arr));
