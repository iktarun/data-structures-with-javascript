/**
 * Questions
 * What is Closure
 * Drawbacks of closure
 * Advantages:
 *  - Module Design Pattern
 *  - Currying
 *  - Data Encapsulation
 *  - Functions like once
 *  - Maintaining state in async world
 *  - setTimeouts
 *  - Iterators
 *  - and many more
 */

function closure() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

closure();

function sayHello() {
  console.log("Hello ");
}
