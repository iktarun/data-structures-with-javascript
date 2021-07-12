var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 42,
  writable: false,
  configurable: false,
});

myObject.a = "40";
myObject.b = "40";
console.log(myObject.a);
