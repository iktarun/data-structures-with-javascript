/**
 * Example1
 */
var map = new Map();
var weakmap = new WeakMap();

(function () {
  var a = { x: 12 };
  var b = { y: 12 };

  map.set(a, 1);
  weakmap.set(b, 2);
})();
console.log(map, weakmap);
//Example2

var k1 = { a: 1 };
var k2 = { b: 2 };

var map = new Map();
var wm = new WeakMap();

map.set(k1, "k1");
wm.set(k2, "k2");

k1 = null;
map.forEach(function (val, key) {
  console.log(key, val); // k1 {a: 1}
});

k2 = null;
wm.get(k2); // undefined
