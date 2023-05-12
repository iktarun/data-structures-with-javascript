// https://stackoverflow.com/questions/38213668/promise-retry-design-patterns
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("API was successfull"); //Check for successful response
      reject("API Error");
    }, 1000);
  });
}

function retry(func, maxRetry) {
  return new Promise((resolve, reject) => {
    func()
      .then((res) => console.log(res))
      .catch((err) => {
        console.log("API retry counter", maxRetry);
        if (--maxRetry === 0) {
          return reject("Max retry limit reached!");
        } else {
          return retry(func, maxRetry)
            .then((res) => console.log(res))
            .catch(reject);
        }
      });
  });
}
try {
  retry(fetchDataFromAPI, 3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
} catch (err) {
  console.log(err);
}
