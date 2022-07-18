function MyClass() {
  // constructor function
  var privateVariable = "foo"; // Private variable

  this.publicVariable = "MyClass"; // Public variable

  privateMethod = function () {
    // Public Method
    console.info(privateVariable);
  };
}

// Instance method will be available to all instances but only load once in memory
MyClass.prototype.publicMethod = function () {
  console.info(this.publicVariable);
};

// Static variable shared by all instances
MyClass.staticProperty = "baz";

var myInstance = new MyClass();
console.error(myInstance);

function ChildClass() {
  this.name = "ChildClass";
  this.publicVariable = "ChildClass"; // Public variable
}

ChildClass.prototype = Object.create(MyClass.prototype);
// console.log(ChildClass);
var ChildClassInstance = new ChildClass();
console.log(ChildClassInstance.publicMethod());
