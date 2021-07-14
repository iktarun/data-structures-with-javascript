(function () {
  function Foo(name) {
    console.log("hello");
    this.name = name;
  }
  Foo.prototype.myName = function () {
    return this.name;
  };
  function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
  }
  // here, we make a new `Bar.prototype`
  // linked to `Foo.prototype`
  // Bar.prototype = Object.create(Foo.prototype);
  Bar.prototype = new Foo();
  //OR
  //Object.setPrototypeOf( Bar.prototype, Foo.prototype );
  // Bar.prototype = Foo.prototype; //Bad approach
  //Bar.prototype = new Foo(); // //Bad approach..need to find the anser for this
  // Beware! Now `Bar.prototype.constructor` is gone,
  // and might need to be manually "fixed" if you're
  // in the habit of relying on such properties!
  Bar.prototype.myLabel = function () {
    return this.label;
  };
  var a = new Bar("a", "obj a");
  console.log(a.myName()); // "a"
  console.log(a.myLabel()); // "obj a"
  a.lastName = "Kumar";
  console.log(a);
})();
