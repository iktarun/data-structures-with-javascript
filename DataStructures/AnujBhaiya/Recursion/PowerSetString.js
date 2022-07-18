function powerSet(str, i, n, curr) {
  if (i === n) {
    console.log(curr);
    return;
  }

  powerSet(str, i + 1, n, curr + str[i]);
  powerSet(str, i + 1, n, curr);
}

let str = "abc";
powerSet(str, 0, str.length, "");
