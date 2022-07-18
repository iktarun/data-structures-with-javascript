(function () {
  /* NOTE: class Synax follows live binding, not static one like the 
    other langauages
  class C {
    constructor() {
      this.num = Math.random();
    }
    rand() {
      console.log("Random: " + this.num);
    }
  }
  var c1 = new C();
  c1.rand(); // "Random: 0.4324299..."
  C.prototype.rand = function () {
    console.log("Random2: " + Math.round(this.num * 1000));
  };
  var c2 = new C();
  c2.rand(); // "Random: 867"
  c1.rand(); // "Random: 432" -- oops!!!
  */
  /* Example 1
  Foo = {
    init: function (who) {
      this.me = who;
    },
    identify: function () {
      return "I am " + this.me;
    },
  };
  Bar = Object.create(Foo);
  Bar.speak = function () {
    alert("Hello, " + this.identify() + ".");
  };
  var b1 = Object.create(Bar);
  b1.init("b1");
  var b2 = Object.create(Bar);
  b2.init("b2");
  b1.speak();
  b2.speak();
  */
})();
