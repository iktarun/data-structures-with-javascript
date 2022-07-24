function searchInSortedArray(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let mid = -1;
  let resultIndex = -1;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (arr[mid] === key) {
      resultIndex = mid;
      break;
    }

    if (arr[left] <= arr[mid]) {
      // check in the left half
      if (key >= arr[left] && key < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // check in the right half
      if (key > arr[mid] && key <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return resultIndex;
}

let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let key = 2;

console.log("Key present at index is: ", searchInSortedArray(arr, key));
