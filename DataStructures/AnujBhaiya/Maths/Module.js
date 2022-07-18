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

// Without modulo Recursion
function moduloUsingRecursion(a, b) {
  if (b === 0) {
    return 1;
  }

  return a * moduloUsingRecursion(a, b - 1);
}

let res = moduloUsingRecursion(2, 3);
console.log(res);
