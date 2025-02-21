/** These are used to share the logic of a function using the given context object
 * We use the ... operator to pass the value if we want to get it in calling function via comma seperate value
 * ...[].slice.call(arguments, 1)
 *https://www.youtube.com/watch?v=75W8UPQ5l7k
 * @param {*} context
 * @param  {...any} args
 */
// Version1
Function.prototype.MyCallV1 = function (context, ...args) {
  context.fnName = this;
  // debugger;
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

/* Output problem 
How does this behave differently when using call(), apply(), and bind()?

Expected answer: These methods explicitly set this inside a function. call() and apply() set this temporarily for a single invocation, while bind() creates a new function where this is permanently set to the provided object
const person = { name: 'Alice' };

function showName() {
    console.log(this.name);
}

const boundShowName = showName.bind(person);
boundShowName();  // Output?

const newPerson = { name: 'Bob' };
boundShowName.call(newPerson);  // Output?

*/