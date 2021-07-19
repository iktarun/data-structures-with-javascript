"use strict";

/**
 * Syntax every(function callbackFn(element, index, array) { ... }, thisArg)
 * Array.prototype.every()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */

if (!Array.prototype.myEvery) {
  Object.defineProperty(Array.prototype, "myEvery", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function (callback, context) {
      //context = thisArg
      if (this === null) {
        throw new TypeError(
          "Array.prototype.myEvery " + "called on null or undefined"
        );
      }
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      let arr = this;
      let result;
      for (let i = 0; i < arr.length; i++) {
        if (context) {
          result = callback.call(context, arr[i], i, arr);
        } else {
          result = callback(arr[i], i, arr);
        }
        if (!result) {
          return false;
        }
      }
      return true;
    },
  });
}

/*
The first time the callback is called, accumulator and currentValue can be one of two values. 
If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, 
and currentValue will be equal to the first value in the array. If no initialValue is provided, 
then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

Note: If initialValue is not provided, reduce() will execute the callback function starting at index 1, 
skipping the first index. If initialValue is provided, it will start at index 0.
*/
/**
 * Array.prototype.myForEach()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
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
}

/**
 * Array.prototype.myForEach()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (!Array.prototype.myForEach) {
  Object.defineProperty(Array.prototype, "myForEach", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function (callback) {
      if (callback == null) {
        throw new TypeError("callback is null or not defined");
      }

      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      if (!Object.prototype.toString.call(this) === "[object Array]") {
        throw new TypeError("Array is not supplied");
      }

      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    },
  });
}
/**
 * Array.prototype.myForEach()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (!Array.prototype.myMap) {
  Object.defineProperty(Array.prototype, "myMap", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function (callback, context) {
      if (callback == null) {
        throw new TypeError("callback is null or not defined");
      }

      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      if (!Object.prototype.toString.call(this) === "[object Array]") {
        throw new TypeError("Array is not supplied");
      }
      let result = [];
      for (let i = 0; i < this.length; i++) {
        result.push(callback.call(context, this[i], i, this));
      }
      return result;
    },
  });
}
/**
 * Array.prototype.myForEach()
 * version 0.0.0
 * Feature	        Chrome  Firefox Internet Explorer   Opera	Safari	Edge
 * Basic support    No      No      No                  No    No      No
 * -------------------------------------------------------------------------------
 */
if (!Array.prototype.myFilter) {
  Object.defineProperty(Array.prototype, "myFilter", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function (callback, context) {
      if (callback == null) {
        throw new TypeError("callback is null or not defined");
      }

      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      if (!Object.prototype.toString.call(this) === "[object Array]") {
        throw new TypeError("Array is not supplied");
      }
      let result = [];
      for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
          result.push(this[i]);
        }
      }
      return result;
    },
  });
}

const isBelowThreshold = (currentValue) => currentValue >= 1;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));

/**  Utility code section to test forEach, filter, map 
 * let arr = [1, 2, 3];

function print(val, index, currenObj) {
  console.log("val", val, "index:", index, "currenObj:", currenObj, this);
  return val * val;
}

function filterFunc(val, index, currenObj) {
  console.log("val", val, "index:", index, "currenObj:", currenObj, this);
  return val > 2;
}

let obj = { name: "Tarun" };
console.log(arr.myFilter(filterFunc, obj));
 */

/**
 * Utility code section to test myReduce
 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let arr = [2, 3, 4, 5, 7];

let resducedValue = arr.myReduce(reducer, 5);
console.log(resducedValue);
*/
