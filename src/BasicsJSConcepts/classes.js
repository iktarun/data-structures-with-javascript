/**
 * Function proptyping which is equal to classes
 */

function Foo() {
  this.a = 1;
}

Foo.prototype.foo = function () {
  console.log("Foo called :)", this.a);
};
function Bar() {
  this.a = 3;
  this.b = 2;
  //   Foo.call(this);
}

Bar.prototype.foo = function () {
  console.log("Bar called :)", this.a);
};

// var a = new Foo();
// a.foo();
// Bar.prototype = Object.create(Foo.prototype);
// var b = new Bar();
// b.foo();

// b.foo.call(a);

/**
 * Classes
 */

// class FooClass {
//   constructor() {
//     this.a = 1;
//   }
//   foo() {
//     console.log("Foo class method called", this.a);
//   }
// }

// class BarClass extends FooClass {
//   constructor() {
//     super();
//     this.a = 3;
//     this.b = 2;
//   }
//   foo() {
//     console.log("BarClass method called", this.a);
//   }
// }

// var a = new FooClass();
// a.foo();

// var b = new BarClass();
// // b.foo();

// b.foo.call(a);
