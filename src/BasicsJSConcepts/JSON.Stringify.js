//https://stackoverflow.com/questions/18089033/json-stringify-does-not-process-object-methods
/**
 * Why this function JSON.stringify does not copy methods?
 *
 */

var obj = {
  name: "Tarun",
  foo: function () {
    return "I'm a function!" + this.name;
  },
};

var json = JSON.stringify(obj, function (key, value) {
  console.log(key, value);
  if (typeof value === "function") {
    return value.toString();
  } else {
    return value;
  }
});

console.log(json);
let parsedObj = JSON.parse(json);
// console.log(parsedObj.name, parsedObj.foo);
// {"foo":"function () { return \"I'm a function!\" }"}
