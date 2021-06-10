let counter = 0;
function onClick(e) {
  console.log(counter++);
}

function throttleWrapper(func, d) {
  let flag = true;
  let timer;
  return function (e) {
    let self = this;
    let args = arguments;

    if (flag) {
      clearTimeout(timer);
      func.apply(self, args);
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, d);
    }
  };
}

let throttle = throttleWrapper(onClick, 3000);
