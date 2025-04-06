

// 1st Apporach: simple one
/*function cancellablePromise(executer, delay){
let cancel = "";
let promise = new Promise((resolve, reject)=>{
    let timerId = setTimeout(()=>executer(resolve,reject), delay);
    cancel = ()=>{
        clearTimeout(timerId);
        reject("Promise cancelled")
    };
});

return {promise, cancel};

}

const {promise, cancel} = cancellablePromise((resolve, reject)=>{
    resolve("Resvoled promise result!");
}, 5000);

promise.then((result)=>console.log(result))
.catch((err)=>console.error(err))

setTimeout(()=>cancel(), 6000);
*/

// Approach 2 using About Controller

function createCancelablePromise(executor) {
    const controller = new AbortController();
    const { signal } = controller;
  
    const promise = new Promise((resolve, reject) => {
      executor(resolve, reject, signal);
  
    //   signal.addEventListener("abort", () => reject(new Error("Promise aborted ❌")));
    });
  
    return { promise, cancel: () => controller.abort() };
  }
  
  // Example Usage
  const { promise, cancel } = createCancelablePromise((resolve, reject, signal) => {
    const timeoutId = setTimeout(() => resolve("✅ Completed!"), 5000);
  
    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      reject(new Error("Promise was aborted 🚀"));
    });
  });
  
  promise
    .then(console.log)
    .catch(console.error);
  
  // Cancel after 2s
  setTimeout(() => cancel(), 2000);
  
