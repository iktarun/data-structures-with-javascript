// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions

var employeeId = "abc123";

function foo() {
  employeeId = "123bcd";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);
// undefined
// '123bcd'
// 'abc123'
// ReferenceError: employeeId is not defined
// Answer
// 'abc123'

//What would be the output of following code ?
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
// foo bar
//bar bar
//foo foo
//bar foo
//Answer
//foo foo

//What would be the output of following code?, if we delete an item from an array, length will remain same
// value will be replaced by indefined
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  delete array[10];
  console.log(array.length);
})();
// 11;
// 5;
// 6;
// undefined;
// Answer;
// 11;

// We can search value if that is array or object
//console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));

// implicit binding will not be applied in this case
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message);
  })(),
};

console.log(obj.innerMessage);

// ReferenceError: this.message is not defined
// undefined
// Type Error
// undefined true
// Answer
// undefined true

//9. What would be the output of following code ?. Func length will be no of params mentioned
function myFunc(param1, param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
// 2 2 2
// 0 2 4
// undefined
// ReferenceError
// Answer
// a) 2 2 2

function strictMode() {
  //stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
  https: function show(msg) {
    msg = 42;
    console.log(msg); // msg === 42
    console.log(arguments[0]); // arguments === 42
  }
  show("Hey");

  // In strict mode arguments[i] does not track the value of
  // the corresponding named argument, nor does a named argument track the value in the corresponding arguments[i]
  function showStrict(msg) {
    "use strict";
    msg = 42;
    console.log(msg); // msg === 42
    console.log(arguments[0]); // arguments === "Hey"
  }
  showStrict("Hey");
}
// strictMode();

function FalsyValues() {
  console.log(null == undefined); // true
}

FalsyValues();
