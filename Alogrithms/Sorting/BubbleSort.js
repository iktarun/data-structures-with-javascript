function Swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function BubbleSort(arr) {
  for (let pass = 1; pass <= arr.length; pass++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        Swap(arr, i, i + 1);
      }
    }
  }
}

let arr = [64, 25, 12, 22, 11];
const res = BubbleSort(arr);

console.log(arr);
