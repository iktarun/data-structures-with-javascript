// https://stackoverflow.com/questions/64077117/memoize-callback-function#:~:text=function%20getData(n%2C%20m%2C,of%20putting%20to%20the%20callback.
// https://dev.to/anishkumar/memoizing-fetch-api-calls-in-javascript-1d16
function memoize(func) {
  let map = new Map(); // for memoization
  return function (...args) {
    let callback = args.pop(); // last argument must be a function
    let key = JSON.stringify(args);
    let result = map.get(key);
    if (result !== undefined) {
      console.log(`getting result from map.get('${key}')`);
      return callback(result);
    }
    console.log(`calling ${func.name}(${args.join(", ")}, callback)`);
    func(...args, (result) => {
      console.log(`writing result with map.set('${key}', ${result})`);
      map.set(key, result);
      callback(result);
    });
  };
}

function getData(n, m, callback) {
  callback(n + m);
}
let memoizedData = memoize(getData);

memoizedData(5, 4, console.log); // 9 calling getData;
memoizedData(5, 4, console.log); // 9 from memory;
