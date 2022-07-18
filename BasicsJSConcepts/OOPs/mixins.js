//The swim property here is the mixin
let swim = {
  location() {
    console.log(`Heading ${this.direction} at ${this.speed}`);
  },
};

let Alligator = function (speed, direction) {
  (this.speed = speed), (this.direction = direction);
};

//This is our source object
let alligator = new Alligator("20 mph", "North");

alligator = Object.assign(alligator, swim);
console.log(alligator, alligator.location());
/**alligator = Object.assign(alligator, swim, crawl);//multiple inhertiance
 * https://www.digitalocean.com/community/tutorials/js-using-js-mixins
 */
