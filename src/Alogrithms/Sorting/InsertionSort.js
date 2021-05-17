function InsertionSort(arr) {
  let item;
  let i;
  let j;
  for (i = 1; i < arr.length; i++) {
    item = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = item;
  }
  return arr;
}

const arr = [44, 55, 11, 22, 33];

const res = InsertionSort(arr);
console.log("res:", res);
