// let first = () => Promise.resolve("first");

// let second = () => Promise.resolve("second");

// async function run() {
//   // Why its returning first???
//   let thrid = await first().then(second());
//   console.log("Thrid", thrid);
// }
// run();

///*
new Promise(function (resolve, reject) {
  // try {
  return setTimeout(() => {
    // throw new Error("Whoops!");
    resolve("Success");
  }, 1000);
  // } catch (err) {
  //   console.log("ERROR:1", err);
  // }
})
  .then(
    (result, error) => {
      throw new Error("Whoops!");
      console.log("Inside chain");
    }
    // ,
    // (error) => {
    //   console.log("Inside error");
    // }
  )
  .then(
    (result, error) => {
      throw new Error("Whoops2!");
      console.log("Inside chain2");
    },
    (error) => {
      console.log("Inside error2");
    }
  )
  .catch((err) => console.log("catch", err));
//*/
