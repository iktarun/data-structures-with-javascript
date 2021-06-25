/*
The first time the callback is called, accumulator and currentValue can be one of two values. 
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, 
and currentValue will be equal to the first value in the array. If no initialValue is provided, 
then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

Note: If initialValue is not provided, reduce() will execute the callback function starting at index 1, 
skipping the first index. If initialValue is provided, it will start at index 0.
*/

Array.prototype.reduce = function (callback, initialValue) {
  console.log(this, arguments);
  debugger;
  if (this === null) {
    throw new TypeError(
      "Array.prototype.reduce " + "called on null or undefined"
    );
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let arr = this;
  let i = 0;

  let value;

  if (initialValue) {
    value = initialValue;
  } else {
    i = 1;
    value = arr[0];
  }

  for (i; i < arr.length; i++) {
    value = callback(value, arr[i]);
  }

  return value;
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let arr = [2, 3, 4, 5, 7];

let resducedValue = arr.reduce(reducer, 5);
console.log(resducedValue);
