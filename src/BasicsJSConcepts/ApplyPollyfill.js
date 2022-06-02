/**
 * https://www.youtube.com/watch?v=75W8UPQ5l7k
 * @param {*} context
 * @param {*} args
 */

// Version1
Function.prototype.MyApplyV1 = function (context, args) {
  context.fnName = this;
  context.fnName(...args);
};

// Version2
Function.prototype.MyApplyV2 = function () {
  arguments[0].fn = this;
  arguments[0].fn(...arguments[1]);
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

displayUser.MyApplyV1(user, ["Bangalore", "India", "call MyCall"]); //----> passing context, params
