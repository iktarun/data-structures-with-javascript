var myObject = {
  a: 2,
};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false,
  configurable: true,
  enumerable: true,
});
Object.defineProperty(myObject, "c", {
  value: 3,
  writable: false,
  configurable: true,
  enumerable: false,
});
// myObject.a; // 2
// myObject.a = 3;
// myObject.b = 4;
// console.log(myObject); // 2
// delete myObject.a;
// console.log(myObject); // undefined

// Writable: false, means you can not update the value
//configurable: false means you can not re-configure the object
// and also can not delete the item
// enumerable: false means property will not appear in fo..in loop
console.log("-----------for in loop---------", myObject);
for (item in myObject) {
  console.log(item, ":", myObject[item]);
}

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
