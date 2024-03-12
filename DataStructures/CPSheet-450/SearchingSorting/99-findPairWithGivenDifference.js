function BinarySearchMethod1(arr, l, r, item) {
  while (l <= r) {
    let mid = parseInt(l + (r - l) / 2);
    console.log("mid is:", mid);
    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] > item) {
      r = mid - 1;
    }

    if (arr[mid] < item) {
      l = mid + 1;
    }
  }

  return -1;
}

function pairGivenDifference(arr, n, item) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let result = BinarySearchMethod2UsingRecursion(arr, 0, n - 1, item);
    if (result !== -1) {
      return 1;
    }
  }
  return -1;
}

let arr = [5, 20, 3, 2, 5, 80];
let item = 78;

console.log(BinarySearchMethod1(arr, 0, arr.length - 1, item));
// console.log(pairGivenDifference(arr, arr.length, item));
