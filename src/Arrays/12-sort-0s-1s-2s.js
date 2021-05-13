function sort012(arr, N) {
  //your code here
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else if (arr[i] === 2) {
      count2++;
    }
  }

  let i = 0;
  let j = 1;
  while (j <= count0) {
    arr[i++] = 0;
    j++;
  }
  j = 1;
  while (j <= count1) {
    arr[i++] = 1;
    j++;
  }
  j = 1;
  while (j <= count2) {
    arr[i++] = 2;
    j++;
  }
  return arr;
}

const res = sort012([0, 0, 1, 2, 2], 5);
console.log("res:", res);
