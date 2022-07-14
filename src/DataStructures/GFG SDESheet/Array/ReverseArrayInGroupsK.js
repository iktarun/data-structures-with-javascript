function ReverseArrayInGroupsK(arr, k) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    while (left < right) {
      let temp = arr[right];
      arr[right--] = arr[left];
      arr[left++] = temp;
    }
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ReverseArrayInGroupsK(arr, 3);
console.log("Resulted array:", arr);
