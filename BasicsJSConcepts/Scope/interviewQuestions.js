/**
 * Ref1: https://www.toptal.com/javascript/interview-questions
 */

// Question1
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// Question2
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// Question3:

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return; //remove semicolon, then see
  {
    bar: "hello";
  }
}

// Questions4
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

// Questions5
var d = {};

["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

// Question: 6

var arr1 = "john".split("");
var arr2 = arr1.reverse(); //nhoj
var arr3 = "jones".split("");
arr2.push(arr3); //['n','h','o','j', ['j','o','n','e','s'] ]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Question 7

onsole.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
/**
 * The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
 */

var list = readHugeList();

var nextListItem = function () {
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem(); //soultion setTimeout( nextListItem, 0);
  }
};

// Question 10

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

/**New keyword
 * To recap, the following actions are automated when the constructor function is called with new:

A new object is created
It binds this to the object
The constructor function’s prototype object becomes the __proto__ property of the new object
It returns the object from the functio
 */
