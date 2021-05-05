// Time Complexity O(n/2)

function LinearSearch(arr, item) {
  let left = 0;
  right = arr.length;
  let position = -1;
  while (left <= right) {
    if (arr[left] === item) {
      position = left;
      break;
    }

    if (arr[right] === item) {
      position = right;
      break;
    }
    left++;
    right--;
  }
  console.log("Position:", position);
}

LinearSearch([4, 6, 3, 1, 7], 3);
