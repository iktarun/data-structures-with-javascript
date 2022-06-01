/**
 * https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
// "use strict";

var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

function printTimer() {
  // console.log(this);
  var count = 0;
  function timer() {
    var count = 0;
    // console.log(this);
    for (var i = 0; i < 5; i++) {
      var count = 0;
      setTimeout(() => {
        this.count++;
        console.log(this, this.count);
      }, i * 1000);
    }
  }
  timer();
}

var obj = {
  count: 10,
  doSomethingLater: function () {
    // The traditional function binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the traditional function will
      // be used within.
      this.count++;
      console.log(this.count, this);
    }, 300);
  },
};

// case 1: this point to parent scope
obj.doSomethingLater();
let test = (...args) => {
  console.log("Inside Test", args);
};

// printTimer();

// obj.b();
// obj.b.call(obj); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}
// test(2, 3);
