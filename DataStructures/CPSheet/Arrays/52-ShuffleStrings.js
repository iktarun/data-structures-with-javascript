function shuffleString(str1, str2, result) {
  let final = (str1 + str2).split("").sort();
  result = result.split("").sort();
  let i = 0;
  if (final.length !== result.length) {
    return false;
  }

  while (i < final.length) {
    if (result[i] !== final[i]) {
      return false;
    }
    i++;
  }
  return true;
}

let str1 = "XY";
let str2 = "12";
let result = ["1XY2", "Y1X2", "Y21XX"];

for (let i = 0; i < result.length; i++) {
  console.log(result[i], shuffleString(str1, str2, result[i]));
}
