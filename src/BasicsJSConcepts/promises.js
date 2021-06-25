new Promise(function (resolve, reject) {
  // try {
  // setTimeout(() => {
  throw new Error("Whoops!");
  // }, 1000);
  // } catch (err) {
  //   console.log("ERROR:1", err);
  // }
}).catch((err) => console.log("catch", err));
