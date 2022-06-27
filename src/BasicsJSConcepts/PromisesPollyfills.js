// False Promises
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data payload from the first promise..."), 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data payload from the second promise..."), 5000);
});

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    /* The following declarations keep track of how many promises are passed
        into the promiseAll function, and their status.
        
        promiseCount: The ammount of promises that need to resolve.
        resolvedData: Contains the returned data of all promises.
        resolvedCount: Keeps track of how many promises have resolved. 
      */
    const promiseCount = promises.length;
    const resolvedData = [];
    let resolvedCount = 0;

    /* Checks the status of the promise all statement */
    function checkStatus(data) {
      /* As each promise resolves we incriment the resolvedCount and 
        push the data from the resolved promise to the resolvedData
        store */
      resolvedData.push(data);
      resolvedCount++;

      // Once all promises have been resolved, then we resolve the promise.
      if (resolvedCount === promiseCount) {
        resolve(resolvedData);
      }
    }

    /* Loops over each promise, calls it, and then checks the status whenver they resolve or fail. */
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          checkStatus(data);
        })
        .catch((error) => {
          // If any of our promises fail, then we reject the promiseAll function.
          reject(error);
        });
    });
  });
}

/* Calls the promiseAll function, passing in other promises 
    within an array as the arguement. */
promiseAll([firstPromise, secondPromise])
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.log(error);
  });
