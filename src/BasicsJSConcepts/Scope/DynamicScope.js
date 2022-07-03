// Read more from kylie simpson page no 88 scope & closures book

// Static Scope
function bar() {
  var a = 3;
  function foo() {
    console.log(a); // 3 (not 2!)
  }
  foo();
}
var a = 2;
bar();

// Dynamic Scope *******************************
function foo1() {
  console.log(a); // 2 (not 3!)
}

function bar1() {
  var a = 3;

  foo1();
}
var a = 2;
bar1();
