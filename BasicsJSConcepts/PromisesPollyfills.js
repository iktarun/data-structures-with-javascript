// https://codepen.io/jamesives/pen/zaapQp
// https://javascript.info/promise-api

// False Promises
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Data payload from the first promise..."), 9000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data payload from the second promise!..."), 1000);
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
// promiseAll([firstPromise, secondPromise])
//   .then((response) => {
//     console.log(response);
//   })

//   .catch((error) => {
//     console.log(error);
//   });

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    /* The following declarations keep track of how many promises are passed
          into the promiseAll function, and their status.
          
          promiseCount: The ammount of promises that need to resolve.
          resolvedData: Contains the returned data of all promises.
          resolvedCount: Keeps track of how many promises have resolved. 
        */
    const promiseCount = promises.length;
    const rejectedData = [];

    /* Checks the status of the promise all statement */
    function collectErrors(data) {
      /* As each promise resolves we incriment the rejectCount and 
          push the data from the resolved promise to the resolvedData
          store */
      rejectedData.push(data);

      // Once all promises have been resolved, then we resolve the promise.
      if (rejectedData.length === promiseCount) {
        reject(rejectedData);
      }
    }

    /* Loops over each promise, calls it, and then checks the status whenver they resolve or fail. */
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          // If all  of our promises fail, then we reject the  function.
          collectErrors(error);
        });
    });
  });
}

promiseAny([firstPromise, secondPromise])
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.log("erros:", error);
  });

/**
 * How to cancel a request
 */

// False Promises
function firstPromise(token) {
  return new Promise((resolve, reject) => {
    token.cancel = reject;
    setTimeout(() => reject("Data payload from the first promise..."), 2000);
  });
}

let token = {};

firstPromise(token)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

token.cancel();

// Our function to cancel promises receives a promise and return the same one and a cancel function
const cancellablePromise = (promiseToCancel) => {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    cancel = reject;
    promiseToCancel.then(resolve).catch(reject);
  });
  return { promise, cancel };
};

/**
 * Promise.allSettled pollyfill
 */
if (!Promise.allSettled) {
  const rejectHandler = (reason) => ({ status: "rejected", reason });

  const resolveHandler = (value) => ({ status: "fulfilled", value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map((p) =>
      Promise.resolve(p).then(resolveHandler, rejectHandler)
    );
    return Promise.all(convertedPromises);
  };
}
