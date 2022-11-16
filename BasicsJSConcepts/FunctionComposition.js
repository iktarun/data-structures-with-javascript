const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((acc, func) => func(acc), initialValue);

function addWithThree(a) {
  console.log("addWithThree", a);
  return a + 3;
}

function square(a) {
  console.log("square", a);
  return a * a;
}

var addWithThreeAndSquare = compose(addWithThree, square);

let result = addWithThreeAndSquare(2);
console.log(result);
