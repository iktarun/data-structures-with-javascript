var current_page = 1;
var records_per_page = 3;

var itemJsonArr = [
  { itemName: "Item 1" },
  { itemName: "Item 2" },
  { itemName: "Item 3" },
  { itemName: "Item 4" },
  { itemName: "Item 5" },
  { itemName: "Item 6" },
  { itemName: "Item 7" },
  { itemName: "Item 8" },
  { itemName: "Item 9" },
  { itemName: "Item 10" },
]; // Can be obtained from another source, such as your itemJsonArr variable

function showRecords(page) {
  let table = document.getElementById("listingTable");
  table.innerHTML = "";
  for (
    let i = (page - 1) * records_per_page;
    i <= (page - 1) * records_per_page + records_per_page;
    i++
  ) {
    console.log(i);
    let div = document.createElement("div");
    let item = itemJsonArr[i];
    let text = document.createTextNode(item.itemName);
    div.appendChild(text);
    table.appendChild(div);
  }
}

function updateURL(e) {
  console.log(e);
  e.preventDefault();
  let attr = e.target.dataset.val;
  //   console.log(attr);
  showRecords(attr);
  //   location.href = window.location.href.split("?")[0] + "?page:" + attr;
}

function showPaginationLinks() {
  let totPageNo = parseInt(itemJsonArr.length / records_per_page);

  let page = document.getElementById("page");

  for (let i = 1; i <= totPageNo; i++) {
    let btn = document.createElement("button");
    btn.onclick = updateURL;
    btn.setAttribute("data-val", i);
    let text = document.createTextNode(i);
    btn.appendChild(text);
    page.appendChild(btn);
  }
}

window.onload = function () {
  showRecords(current_page);
  showPaginationLinks();
};
