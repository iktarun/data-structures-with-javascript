function BinarySearchMethod1(arr, l, r, item) {
  while (l <= r) {
    let mid = parseInt(l + (r - l) / 2);
    console.log("mid is:", mid);
    if (arr[mid] === item) {
      console.log("Item found");
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

function BinarySearchMethod2UsingRecursion(arr, l, r, item) {
  let mid = parseInt(l + (r - l) / 2);
  console.log("mid:", mid);

  if (arr[mid] === item) {
    return mid;
  }

  if (arr[mid] > item) {
    r = mid - 1;
    return BinarySearchMethod2UsingRecursion(arr, l, r, item);
  }

  if (arr[mid] < item) {
    l = mid + 1;
    return BinarySearchMethod2UsingRecursion(arr, l, r, item);
  }

  return -1;
}

let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
// const res = BinarySearchMethod1(arr, 0, arr.length - 1, 5);
const res = BinarySearchMethod2UsingRecursion(arr, 0, arr.length - 1, 5);
if (res !== -1) {
  console.log("Item found at location:", res);
} else {
  console.log("Item does not found in the array");
}
