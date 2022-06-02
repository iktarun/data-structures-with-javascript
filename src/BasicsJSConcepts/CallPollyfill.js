/**
 *https://www.youtube.com/watch?v=75W8UPQ5l7k
 * @param {*} context
 * @param  {...any} args
 */
// Version1
Function.prototype.MyCallV1 = function (context, ...args) {
  context.fnName = this;
  context.fnName(...args);
};

// Version2
Function.prototype.MyCallV2 = function () {
  arguments[0].fn = this;
  arguments[0].fn(...[].slice.call(arguments, 1));
  //OR
  //arguments[0].fn.apply(arguments[0], [].slice.call(arguments,1))
};

function displayUser(state, country, method) {
  console.log("********" + method + "******");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}
var user = {
  name: "Taka D Wall",
  age: "99",
  city: "Loferganj",
};

displayUser.MyCallV1(user, "Bangalore", "India", "call MyCall"); //----> passing context, params
