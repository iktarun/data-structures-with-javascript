const array1 = ["a", "b", "c"];
const iteratorKeys = array1.keys();
const iterator = array1.values();
debugger;
console.log(Object.keys(array1));
console.log(iteratorKeys);

for (const value of iterator) {
  console.log(value);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
