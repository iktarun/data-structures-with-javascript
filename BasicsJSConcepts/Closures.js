function closure() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

closure();

function sayHello() {
  console.log("Hello ");
}
