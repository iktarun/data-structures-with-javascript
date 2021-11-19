// Example for Timeout or callback
function foo1() {
  setTimeout(function () {
    console.log(this);
    // `this` here is lexically inherited from `foo1()`
    console.log(this.a);
  }, 3000);
}
var obj = {
  a: 2,
};
// var a = "2";
foo1.call(obj); // 2

/**
 * This example is before ES6
 * function foo() {
        var self = this; // lexical capture of `this`
        setTimeout( function(){
            console.log( self.a );
        }, 100 );
    }
    OR
//     setTimeout(
//     function () {
//       // `this` here is lexically inherited from `foo1()`
//       console.log(this.a);
//     }.bind(this)(),
//     100
//   );
    var obj = {
    a: 2,
    };
   foo.call( obj ); // 2
 */

// Pollyfill
if (!Function.prototype.Mybind) {
  Function.prototype.Mybind = function (context /* ...args */) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1); //or Object.values(arguments).slice(1)

    if (typeof fn !== "function") {
      throw new TypeError(
        "Function.prototype.bind - context must be a valid function"
      );
    }

    return function () {
      return fn.apply(
        context,
        args.concat(Array.prototype.slice.call(arguments))
      );
    };
  };
}

function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 1,
};
foo.Mybind(obj, 2, { c: 3 }); //();
// simple `bind` helper
Array.prototype.Mybind = function (fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
};
var obj = {
  a: 2,
};

// var bar = bind(foo, obj);
// var b = bar(3); // 2 3
// console.log(b); // 5
