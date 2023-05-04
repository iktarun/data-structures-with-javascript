// https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937
// One liner code
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const getName = (person) => person.name;
// getName({ name: "Superman" });
// 'Superman'

const uppercase = (string) => string.toUpperCase();
// uppercase("Superman");
// 'SUPERMAN'

const get5Characters = (string) => string.substring(0, 5);
// get5Characters("Superman");
// 'Super'

const reverse = (string) => string.split("").reverse().join("");
reverse("Superman");
// 'namrepuS'
const pipe =
  (...functions) =>
  (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

const compose =
  (...functions) =>
  (value) => {
    return functions.reduceRight((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

let res = pipe(
  getName,
  uppercase,
  get5Characters,
  reverse
)({ name: "Superman" });
// 'REPUS'

console.log("Pipe result:", res);

let composeRes = compose(
  reverse,
  get5Characters,
  uppercase,
  getName
)({ name: "Superman" });
// 'REPUS'

console.log("composeRes result:", composeRes);
