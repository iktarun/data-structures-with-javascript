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

//console.log(sum(1)(2)(3)()); //The above solution will work for these type of input
//console.log(sum(1, 2)(3)()); //not this, will not return good result

// Method2: Using bind method
// let multiply = function (x, y) {
//   console.log(x, y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo, multiplyByTwo(5));

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum1(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum1);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying

// console.log(sum1(1, 2)(3)());
