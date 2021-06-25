// Time Complexity n*n
function print_primes_till_N(n) {
  let isPrime = false;
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      continue;
    }
    isPrime = true;

    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

// Eratosthene’s method
function print_primes_till_N_Method2(n) {
  let primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let p = 2; p * p < n; p++) {
    if (primes[p] === true) {
      for (let j = p * p; j < n; j = j + p) {
        primes[j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === true) {
      count++;
    }
  }
  console.log(count);
}

print_primes_till_N(50);
