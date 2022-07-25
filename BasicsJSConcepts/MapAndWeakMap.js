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

/**
 * Map Pollyfill
 */

console.log("##################### Map Pollyfill work#############");
(function () {
  function MyMap() {
    this.map = {};
  }

  // considering only primitives here
  MyMap.prototype.set = function (key, item) {
    this.map[typeof key + "_" + key] = item;
  };

  MyMap.prototype.get = function (key) {
    return this.map[typeof key + "_" + key] || -1;
  };

  MyMap.prototype.size = function () {
    return Object.keys(this.map).length || 0;
  };

  MyMap.prototype.clear = function () {
    this.init();
  };

  MyMap.prototype.init = function () {
    this.map = {};
  };

  let map = new MyMap();
  console.log(map);

  map.set("1", "str1"); // a string key
  map.set(1, "num1"); // a numeric key
  map.set(true, "bool1"); // a boolean key

  // remember the regular Object? it would convert keys to string
  // Map keeps the type, so these two are different:
  console.log(map.get(1)); // 'num1'
  console.log(map.get("1")); // 'str1'

  console.log(map.size()); // 3
})();
