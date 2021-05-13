//Function to rotate an array by d elements in counter-clockwise direction.
// Complexity Space: O(d), Time O(n)
function rotateArr(arr, d, n) {
  // code here
  let arr1 = [];
  for (let i = 0; i < d; i++) {
    arr1.push(arr[i]);
  }

  console.log("arr1:", arr1);
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  console.log("arr:", arr);

  let i = n - d;
  let j = 0;
  while (j < arr1.length) {
    arr[i++] = arr1[j++];
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = rotateArr(arr, 7, arr.length);
console.log("res", res);
