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
//obj2.greet(); //Error not defind..comment out this line to run the program

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
// Using Chat GPT with feature like circular dependecies
function deepCloneV1(sourceObject, destinationObject, visited = new WeakMap()) {
  for (let key in sourceObject) {
    // if (!sourceObject.hasOwnProperty(key)) continue;

    if (typeof sourceObject[key] !== "object" || sourceObject[key] === null) {
      destinationObject[key] = sourceObject[key]; // Clone primitives
    } else {
      // Handle circular references
      if (visited.has(sourceObject[key])) {
        destinationObject[key] = visited.get(sourceObject[key]);
        continue;
      }

      // Create array or object accordingly
      destinationObject[key] = Array.isArray(sourceObject[key]) ? [] : {};

      // Track circular references
      visited.set(sourceObject[key], destinationObject[key]);

      // Recursively clone nested objects
      deepClone(sourceObject[key], destinationObject[key], visited);
    }
  }
}

function deepCloneChatGPTV2(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;  // Handle primitive values

  // Prevent circular reference by checking WeakMap
  if (hash.has(obj)) return hash.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);  // Store the reference in WeakMap

  // Recursively clone properties
  for (let key in obj) {
    clone[key] = deepClone(obj[key], hash);
  }
  return clone;
}

const clonedObj = deepClone(objA);
console.log(clonedObj);  // Successfully cloned without circular reference error


// Circular Dependency check
function isCircular(obj) {
  const seenObjects = new Set();

  function detect(obj) {
    if (obj && typeof obj === 'object') {
      if (seenObjects.has(obj)) {
        return true;  // Circular reference found!
      }
      seenObjects.add(obj);
      return Object.values(obj).some(detect);  // Check nested objects
    }
    return false;
  }

  return detect(obj);
}

console.log(isCircular(objA));  // Output: true



let destinationObject = {};
deepCloneV1(sourceObject, destinationObject);
destinationObject.fname = "Sapna";
destinationObject.printName();

/**
 * Problem2: Deep Cloning an array
 */
function deepCloneArray(arr) {
  return arr.map(item => Array.isArray(item) 
    ? deepCloneArray(item) // Recursively clone arrays
    : typeof item === 'object' && item !== null 
      ? deepCloneObject(item)  // Handle nested objects if needed
      : item                   // Primitive values
  );
}

function deepCloneObject(obj) {
  return Object.keys(obj).reduce((clone, key) => {
    clone[key] = typeof obj[key] === 'object' && obj[key] !== null
      ? deepCloneObject(obj[key]) 
      : obj[key];
    return clone;
  }, {});
}

const array = [1, 2, { a: 3, b: [4, 5] }, [6, 7]];
const clonedArray = deepCloneArray(array);
clonedArray[2].b[0] = 100;

console.log(array);        // Original array stays intact
console.log(clonedArray);  // Deeply cloned array

