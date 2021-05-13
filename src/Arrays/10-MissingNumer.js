function MissingNumber(array, n) {
  //code here

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  // sum of 1-n series
  let seriesSum = (n * (n + 1)) / 2;

  let diff = seriesSum - sum;
  return diff;
}
