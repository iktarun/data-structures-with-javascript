function myNew(constructor, ...args) {
    // Step 1: Create a new empty object
    let obj = {};
  
    // Step 2: Link the prototype
    Object.setPrototypeOf(obj, constructor.prototype);
  
    // Step 3: Call the constructor with `this` set to the new object
    let result = constructor.apply(obj, args);
  
    // Step 4: If the constructor returns an object, return that object instead
    return result instanceof Object ? result : obj;
  }
  
  // Constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Using our custom `myNew` function instead of `new`
  const person2 = myNew(Person, "Bob", 30);
  console.log(person2.name); // "Bob"
  console.log(person2.age);  // 30
  console.log(person2 instanceof Person); // true
/**
 * 🔹 Explanation
1️⃣ Create an empty object {}
2️⃣ Manually set its prototype to the constructor’s prototype using Object.setPrototypeOf()
3️⃣ Call the constructor with apply() to set this inside it
4️⃣ Return the created object, unless the constructor returned another object


 *  */  