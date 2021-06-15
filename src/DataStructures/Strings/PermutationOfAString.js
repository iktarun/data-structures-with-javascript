function swap(a, l, r) {
  let temp = a[l];
  a[l] = a[r];
  a[r] = temp;
}

function permute(a, l, r) {
  console.log("outer", l, r);
  // Base case
  if (l == r) console.log(a);
  else {
    // Permutations made
    for (let i = l; i <= r; i++) {
      // Swapping done
      console.log("First call", a, l, i);
      swap(a, l, i);

      // Recursion called
      console.log("permute call", a, l + 1, r);
      permute(a, l + 1, r);

      //backtrack
      console.log("backtrack call", a, l, i);
      swap(a, l, i);
    }
  }
}

// Driver Code
let str = ["A", "B", "C"];
let n = str.length;
permute(str, 0, n - 1);
