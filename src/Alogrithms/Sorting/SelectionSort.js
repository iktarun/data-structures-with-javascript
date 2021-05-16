function SelectionSort(arr) {
  function Swap(arr, i) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  let minIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    Swap(arr, i);
  }
}

let arr = [64, 25, 12, 22, 11];
const res = SelectionSort(arr);

console.log(arr);
