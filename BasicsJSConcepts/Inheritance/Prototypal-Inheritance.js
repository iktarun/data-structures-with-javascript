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
// debugger;
delete rabbit.eats; //Delete operation will not delete object property, becuase it belongs to its prototype
delete Rabbit.prototype.eats; //It will delete the property
// Rabbit.prototype = {
//   eats: true,
// };
Rabbit.prototype = {};

let rabbit1 = new Rabbit("Tarun");

console.log("rabbit:", rabbit.eats); // ?
console.log("rabbit1:", rabbit1.eats); // ?

//for...in loop

let obj1 = {
  fname: "Tarun",
  getfName() {
    console.log("First name is:", this.fname);
  },
};

let obj2 = {
  lname: "Tarun",
  getlName() {
    console.log("Last name is:", this.lname);
  },
  __proto__: obj1,
};

obj2.getlName();

//It will only print object own properties plus referenced object properties in chain
for (key in obj2) {
  console.log(key, obj2[key]);
}

console.log(Object.keys(obj2)); //It will only print object own properties

/*//////////////////////
Example 2
/////////////////////////////////////////*/
function Parent() {
  this.name = "Parent";
  this.lname = "Last name";
}

Parent.prototype.greet = function () {
  console.log("Hello from " + this.name + this.lname);
};

function Child() {
  // This syntax is really important to understand, when we instantiate an object with
  // new keyword, it will pased by rederence to parent object and there it set the value
  // in case if not value has been found in child then it will take that from parent
  Parent.call(this);
  this.name = "Child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child();

child.greet();
// hello from Child

child.constructor.name;
// 'Child'
