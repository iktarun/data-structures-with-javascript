async function sayHello(i){
    return new Promise((resolve, reject) => i === 6?setTimeout(resolve, 200, 'One'):setTimeout(reject, 500, "Error"))
}

async function retry(fn, retries) {
 
      try {
        return await fn(retries);
      } catch (error) {
        console.log("Error", error)
        if (retries === 1) throw error;
        return retry(fn, retries -1);
      }
  }

  function retryMethod2(fn, retries) {
    return new Promise((resolve, reject) => {
      fn(retries)
        .then((result) => {
          console.log(result);
          resolve(result); // Success: resolve final result
        })
        .catch((err) => {
          console.log("error", retries);
          retries--;
          if (retries === 0) {
            reject("Error"); // Stop retrying if exhausted
          } else {
            return retry(fn, retries) // 🔥 Correctly return the recursive call
              .then(resolve) // Ensure the final resolution is passed up the chain
              .catch(reject); // Ensure the final rejection is handled properly
          }
        });function retry(fn, retries) {
          return new Promise((resolve, reject) => {
            fn(retries)
              .then((result) => {
                console.log(result);
                resolve(result); // Success: resolve final result
              })
              .catch((err) => {
                console.log("error", retries);
                retries--;
                if (retries === 0) {
                  reject("Error"); // Stop retrying if exhausted
                } else {
                  return retry(fn, retries) // 🔥 Correctly return the recursive call
                    .then(resolve) // Ensure the final resolution is passed up the chain
                    .catch(reject); // Ensure the final rejection is handled properly
                }
              });
          });
        }function retry(fn, retries) {
          return new Promise((resolve, reject) => {
            fn(retries)
              .then((result) => {
                console.log(result);
                resolve(result); // Success: resolve final result
              })
              .catch((err) => {
                console.log("error", retries);
                retries--;
                if (retries === 0) {
                  reject("Error"); // Stop retrying if exhausted
                } else {
                  return retry(fn, retries) // 🔥 Correctly return the recursive call
                    .then(resolve) // Ensure the final resolution is passed up the chain
                    .catch(reject); // Ensure the final rejection is handled properly
                }
              });
          });
        }
    });
  }

  retry(sayHello, 5).then(console.log).catch(console.error);
  
  