// Example 1
class CoolGuy {
  specialTrick = "";
  CoolGuy(trick) {
    console.log("hello");
    specialTrick = trick;
  }
  showOff() {
    console.log("Here's my trick: ", this.specialTrick);
  }
}

let Joe = new CoolGuy("jumping rope");
debugger;
Joe.showOff(); // Here's my trick: jumping rope

let alert = console.log;
/**
 * Function proptyping which is equal to classes
 */

// function Foo() {
//   this.a = 1;
// }

// Foo.prototype.foo = function () {
//   console.log("Foo called :)", this.a);
// };
// function Bar() {
//   this.a = 3;
//   this.b = 2;
//   //   Foo.call(this);
// }

// Bar.prototype.foo = function () {
//   console.log("Bar called :)", this.a);
// };

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

//Private and protected properties and methods
// class CoffeeMachine {
//   // ...
//   _power = 0;
//   // constructor() {
//   //   // this._power = power;
//   // }

//   get power() {
//     return this._power;
//   }

//   set power(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._power = value;
//   }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

// coffeeMachine.power = 25; // Error (no setter)
// console.log(coffeeMachine);

// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  },
};

// usage:

class UserParent {
  constructor(name) {
    this.name = name;
    this.parent = "Parent";
  }
  fullName() {
    console.log(`Hello ${this.name} Kumar`);
  }
}

class User extends UserParent {
  publicVariable = "publicVariable"; //= this.publicVariable
  _protectedVariable = "protectedVariable";
  constructor(name) {
    const privateVariable = "privateVariable";
    super(name);
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
let user = new User("Tarun");
// user.sayHi(); // Hello Dude!
// user.fullName();
console.log(user.parent);
