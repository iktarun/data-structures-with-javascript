// Bad Approach, it is suitable for only primitive values
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
obj2.greet(); //Error not defind..comment out this line to run the program

// Good Apporach

let sourceObject = {
  fname: "Tarun",
  address: {
    city: "Chandigarh",
    Country: "India",
  },
  contacts: [324343 - 22, 2 - 3234343],
  printName: function () {
    console.log(this.fname);
  },
};

function deepClone(sourceObject, destinationObject) {
  for (key in sourceObject) {
    if (typeof sourceObject[key] !== "object") {
      destinationObject[key] = sourceObject[key];
    } else {
      if (
        Object.prototype.toString.call(sourceObject[key]) === "[object Array]"
      ) {
        destinationObject[key] = [];
      } else {
        destinationObject[key] = {};
      }

      deepClone(sourceObject[key], destinationObject[key]);
    }
  }
}

let destinationObject = {};
deepClone(sourceObject, destinationObject);
destinationObject.fname = "Sapna";
destinationObject.printName();
