//Using Reduce

function runPromisesInSequenceWithResults(tasks) { 
    return tasks.reduce((promiseChain, currentTask, index) => {
      return promiseChain.then(results => {
        // console.log("promiseChain runs!");
        return currentTask().then(result => {
            // console.log("results:",results,"result:", result);
            return [...results, result]
        })
      }
      );
    }, Promise.resolve([])); // Start with an empty array
  }

  
  function task1() {
    return new Promise(resolve => setTimeout(() => resolve("Task 1 completed"), 5000));
  }
  
  function task2() {
    return new Promise(resolve => setTimeout(() => resolve("Task 2 completed"), 3000));
  }
  
  function task3() {
    return new Promise(resolve => setTimeout(() => resolve("Task 3 completed"), 1000));
  }
  
  const tasks = [task1, task2, task3];
  
  // runPromisesInSequenceWithResults(tasks).then(results => {
  //   console.log(results);
  // });


  //Using Generators
  function* promiseGenerator(promises) {
    for (const promise of promises) {
      yield promise(); // Yield all promises immediately
    }
  }

  async function runPromisesUsingGenerator(){
    let results = [];
    let promiseIterator = promiseGenerator(tasks);

    function process(next){
      if(next.done){
        console.log(results)
        return results;
      }

      next.value.then((result)=>{
        console.log("result:", result);
        results.push(result);
         process(promiseIterator.next())
      })

    }

    process(promiseIterator.next());

  }

  runPromisesUsingGenerator(tasks).then(results => {
    console.log(results);
  });

  




  