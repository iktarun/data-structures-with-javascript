// let first = () => Promise.resolve("first");

// let second = () => Promise.resolve("second");

// async function run() {
//   // Why its returning first???
//   let thrid = await first().then(
//     second().then((result) => console.log(result))
//   );
//   console.log("Thrid", thrid);
// }
// run();

/*
new Promise(function (resolve, reject) {
  try {
    return setTimeout(() => {
      throw new Error("Whoops!");
      resolve("Success");
    }, 1000);
  } catch (err) {
    console.log("ERROR:1", err);
  }
})
  .then(
    (result, error) => {
      console.log("Inside chain", result);
      throw new Error("Whoops!!");
    },
    (error) => {
      console.log("Inside error");
    }
  )
  .then(
    (result, error) => {
      console.log("Inside chain2");
      // throw new Error("Whoops2!");
    },
    (error) => {
      console.log("Inside error2");
    }
  )
  .catch((err) => console.log("catch block", err));
*/

// Promise.race([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then(console.log)
//   .catch(console.error); // 1
