// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
function sortArray(arr) {
  let mid = 0;
  let low = 0;
  let high = arr.length - 1;
  let temp;
  while (mid <= high) {
    if (arr[mid] === 0) {
      temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }
  return arr;
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sortArray(arr));
