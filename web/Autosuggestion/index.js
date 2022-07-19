let items = ["apple", "applie", "apac", "application"];

let suggestion = document.getElementById("suggestions");

function clearSuggestions() {
  suggestion.innerHTML = "";
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(this, args);
    }, delay);
  };
}

function onSearch(e) {
  //   debugger;
  console.log(e.value);
  let keyword = e.value;
  let filtered = items.filter((item) => {
    if (item.indexOf(keyword) > -1) {
      return true;
    }
  });

  console.log(filtered);

  let ul = document.createElement("ul");

  let suggestion = document.getElementById("suggestions");
  suggestion.innerHTML = "";

  for (let i = 0; i < filtered.length; i++) {
    let newLiTag = document.createElement("li");
    let textNode = document.createTextNode(filtered[i]);
    newLiTag.appendChild(textNode);
    ul.appendChild(newLiTag);
    suggestion.appendChild(ul);
  }
  console.log(ul);
}

var debouncedSearch = debounce(onSearch, 3000);
