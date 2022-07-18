function* ayncCall() {
  yield 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    });
  });
}

// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* generator(i) {
  // The yield* expression is used to delegate to another generator or iterable object.
  yield* ayncCall(); //Will not wait
  yield i + 10;
}

const gen = generator(10);

console.log("1st output:", gen.next().value);
// expected output: 10

console.log("2nd output:", gen.next().value);
// expected output: 20

/**
 * Simple Example
 

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

console.log(JSON.stringify(generator.next())); // {value: 1, done: false}
console.log(JSON.stringify(generator.next())); // {value: 1, done: false}
console.log(JSON.stringify(generator.next())); // {value: 1, done: false}
*/
