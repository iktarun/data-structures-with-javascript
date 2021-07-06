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
