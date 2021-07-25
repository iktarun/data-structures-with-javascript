let first = () => Promise.resolve("first");

let second = () => Promise.resolve("second");

async function run() {
  // Why its returning first???
  let thrid = await first().then(second());
  console.log("Thrid", thrid);
}
run();

/*
new Promise(function (resolve, reject) {
  // try {
  // setTimeout(() => {
  throw new Error("Whoops!");
  // }, 1000);
  // } catch (err) {
  //   console.log("ERROR:1", err);
  // }
}).catch((err) => console.log("catch", err));
*/
