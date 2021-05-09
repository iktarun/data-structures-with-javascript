/*
    Find the Peak element in the array
    A peak element in an array is the one that is not smaller than its neighbours.
    Given an array of size N, find the index of any one of its peak elements.
    Expected Time Complexity: O(log N)
    Expected Auxiliary Space: O(1)
 
*/

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = -1;

  while (left < right) {
    mid = parseInt(left + (right - left) / 2);
    console.log(
      "left:",
      left,
      "right:",
      right,
      "mid:",
      mid,
      "check->",
      arr[mid],
      "<",
      arr[mid + 1]
    );
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

let arr = [5, 60, 2, 1, 3, 4, 17, 20, 15, 14];
/* Watch this for more clearity
https://www.youtube.com/watch?v=a7D77DdhlFc
*/

console.log("arr:", arr);
const res = findPeakElement(arr);
console.log("Peak element is:", arr[res]);
