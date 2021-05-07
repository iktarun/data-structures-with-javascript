// Time Complexist O(log(N))

function transitionPoint(arr) {
  let l = 0;
  let r = arr.length - 1;
  let mid = -1;
  while (l <= r) {
    mid = parseInt(l + (r - l) / 2);
    console.log("mid:", mid);
    if (arr[mid] === 1 && arr[mid - 1] === 0) {
      return mid;
    }

    if (arr[mid] == 1) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
let res = transitionPoint(arr);
if (res !== -1) {
  console.log("Item found at location:", res);
} else {
  console.log("Item does not found");
}
