function countSetBitsInInteger(n) {
  //your code here
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    console.log(n);
    n = Math.floor(n / 2);
  }
  return count;
}

console.log(countSetBitsInInteger(6));
