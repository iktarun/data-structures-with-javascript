document.querySelector("#grandparent").addEventListener("click", (event) => {
  console.log(
    "Grapndparent Clicked!",
    "target:",
    event.target,
    "currentTarget:",
    event.currentTarget
  );

}, true);

document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log(
      "Parent Clicked!",
      "target:",
      event.target,
      "currentTarget:",
      event.currentTarget
    );
  }
);

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log(
      "Child Clicked!",
      "target:",
      event.target,
      "currentTarget:",
      event.currentTarget
    );
    event.stopPropagation()
  }
);
