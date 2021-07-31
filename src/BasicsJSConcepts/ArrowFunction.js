"use strict";

var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

let test = (...args) => {
  console.log("Inside Test", args);
};

obj.b.call(obj); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
test(2, 3);
