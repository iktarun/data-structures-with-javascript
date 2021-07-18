// class Person {
//   constructor(name, city, country) {
//     this.name = name;
//     this.city = city;
//     this.country = country;
//   }
//   greet() {
//     console.log(this.name, this.city, this.country);
//   }
// }

// let p1 = new Person("Tarun", "Bangalore", "India");
// p1.greet();
// p2 = p1;
// p2.name = "Sapna";
// p2.greet();

let obj1 = {
  name: "Tarun",
  greet: function () {
    console.log(this.name);
  },
};

let obj2 = {
  name: "Sapna",
};

obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.greet();
obj2.name = "Sapna";
obj2.greet();
