// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// var a = 1;
// function foo() {
//   var a = 2;
//   this.bar();
// }
// function bar() {
//   console.log("Hi", this.a);
// }

// let obj = {
//   a: 2,
//   bar: bar,
// };

// let obj1 = obj.bar;
// obj1.call(obj);
//foo(); //ReferenceError: a is not defined

// Hard Binding

function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
bar(); // 2
setTimeout(bar, 100); // 2
// hard-bound `bar` can no longer have its `this` overridden
bar.call({ a: 3 }); // 2

function ImplicitLost() {
  const obj4 = {
    name: "obj4",
    printName() {
      return console.log(this.name);
    },
  };

  let func = obj4.printName;

  func();
}
ImplicitLost();
