function factSum(n, sum = []) {
  if (n > 0) {
    sum.push(n);
    return factSum(n - 1, sum);
  }
  return sum;
}

let res = factSum(5);
console.log(res);
