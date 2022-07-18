document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grapndparent Clicked!");
});

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child Clicked!");
});
