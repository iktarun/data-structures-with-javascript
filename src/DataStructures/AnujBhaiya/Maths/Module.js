// Without modulo operation
function modulo(a, b) {
  let res = 1;
  while (b > 0) {
    if ((b & 1) !== 0) {
      res = res * a;
      b = b - 1;
    } else {
      a = a * a;
      b = b >> 1;
    }
    // a = a * a;
  }
  console.log(res);
}

modulo(2, 3);
