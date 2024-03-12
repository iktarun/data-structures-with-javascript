function squareRoot(n) {
  let number = "";
  for (let i = 1; i < n; i++) {
    number = Math.sqrt(i).toString().split(".");
    if (number.length === 1) {
      console.log(i);
    }
  }
}

console.log(squareRoot(9));
