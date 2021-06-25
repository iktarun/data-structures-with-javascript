let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)());

// Method2

let multiply = function (x, y) {
  console.log(x, y);
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo, multiplyByTwo(5));
