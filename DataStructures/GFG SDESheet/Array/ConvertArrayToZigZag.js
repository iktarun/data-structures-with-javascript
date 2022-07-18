function zigzag(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (flag === 0) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }

      flag = 1;
    } else {
      if (arr[i + 1] > arr[i]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      flag = 0;
    }
  }
  return arr;
}

let arr = [4, 3, 7, 8, 6, 2, 1];
//Output should be: 3, 7, 4, 8, 2, 6, 1

console.log(zigzag(arr));
