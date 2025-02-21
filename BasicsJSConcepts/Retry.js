async function sayHello(i){
    return new Promise((resolve, reject) => i === 2?setTimeout(resolve, 200, 'One'):setTimeout(reject, 500, "Error"))
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

  retry(sayHello, 5).then(console.log);
  
  