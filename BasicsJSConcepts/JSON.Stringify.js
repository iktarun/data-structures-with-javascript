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

function stringify(obj) {
  let objString = "";

  // We get the last key of this object
  const lastKey = Object.keys(obj).pop();
  // We add the first curly brace
  objString += "{";
  for (const key in obj) {
    const value = obj[key];

    objString += `"${key}":`;

    if (typeof obj[key] === "object") {
      objString += `${stringify(value)}`;
    } else if (typeof value === "string") {
      objString += `"${value}"`;
    } else if (typeof obj[key] === "number") {
      objString += `${value}`;
    }

    // We add the comma
    if (key !== lastKey) {
      objString += ",";
    }
  }
  // We add the last curly brace
  objString += "}";
  return objString;
}

// let obj = { name: "Juan", age: 29, address: { street: "Street 1", number: 3 } };

/* let obj = {"name":"Juan","age":30} */ /* console.info(JSON.stringify(obj)) */

console.log(stringify(obj));
