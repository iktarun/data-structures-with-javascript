/* <input type="text" onkeypress="debounce(event)" /> */
/**
 *
 * https://www.youtube.com/watch?v=Zo-6_qx8uxg&t=734s
 */
let counter = 0;
function onType(e) {
  console.log(counter++, e.target.value);
}

function debounceWrapper(func, d) {
  let timer;
  return function (e) {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, d);
  };
}

let debounce = debounceWrapper(onType, 3000);
