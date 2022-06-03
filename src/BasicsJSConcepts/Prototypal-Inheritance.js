/**
 * Example 1
 
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
debugger;
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eats, Object.getPrototypeOf(rabbit));

*/

/**
 * Example 2
 * Uncomment these line one by one, you will learn all the stuff, behaviour
 * If we are assigning value to prototype after object create, it will not make an
 * difference, until you try to delete data from that object prototype
 * If you are assignming Rabbit.prototype = {}, then also rabbit1 has no impact
 * it will still hold the reference for eats = true
 */
function Rabbit(fname) {
  this.name = fname;
  // this.eats = true;
}
Rabbit.prototype = {
  eats: true,
  sleep: true,
};

let rabbit = new Rabbit("Sapna");
debugger;
delete rabbit.eats; //Delete operation will not delete object property, becuase it belongs to its prototype
delete Rabbit.prototype.eats; //It will delete the property
// Rabbit.prototype = {
//   eats: true,
// };
Rabbit.prototype = {};

let rabbit1 = new Rabbit("Tarun");

console.log("rabbit:", rabbit.eats); // ?
console.log("rabbit1:", rabbit1.eats); // ?
