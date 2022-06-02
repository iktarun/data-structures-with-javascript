/**
 * https://javascript.info/currying-partials
 * Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 * @param {*} a
 * @returns
 */

// Method1: using colsures
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)());

// Method2: Using bind method
let multiply = function (x, y) {
  console.log(x, y);
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo, multiplyByTwo(5));
