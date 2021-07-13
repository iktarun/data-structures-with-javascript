"use strict";

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
        throw new TypeError("this is null or not defined");
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

let arr = [1, 2, 3];

function print(val, index, currenObj) {
  console.log("val", val, "index:", index, "this:", currenObj);
}

arr.myForEach(print);
