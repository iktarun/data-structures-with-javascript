let numbers = [0, 1, 2];

let numbers1 = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  },
});

console.log(numbers1[1]); // 1
console.log(numbers1[123]); // 0 (no such item)
