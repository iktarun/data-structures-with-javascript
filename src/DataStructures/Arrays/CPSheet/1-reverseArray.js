let reverseArray = function (a, n) {
  let i = 0;
  let j = n - 1;
  let temp;
  while (i < j) {
    temp = a[j];
    a[j--] = a[i];
    a[i++] = temp;
  }
  return a;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6], 6));
