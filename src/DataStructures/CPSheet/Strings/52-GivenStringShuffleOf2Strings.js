function givenStringShuffleOf2Strings(s1, s2, res) {
  let i = 0;
  let j = 0;
  let k = 0;

  let str1Len = s1.length;
  let str2Len = s2.length;
  let resLen = res.length;

  //   If order does matter, if not then skip the below step of sorting
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  res = res.split("").sort().join("");

  if (str1Len + str1Len !== resLen) {
    return false;
  }

  while (k < resLen) {
    if (i < str2Len && s1[i] === res[k]) {
      i++;
    } else if (j < str1Len && s2[j] === res[k]) {
      j++;
    } else {
      break;
    }
    k++;
  }

  if (i < str1Len || j < str2Len) {
    return false;
  }

  return true;
}

let first = "XY";
let second = "12";
// let results = ["1XY2", "Y1X2", "Y21XX"];

let res = "Y21XX";

let result = givenStringShuffleOf2Strings(first, second, res);
console.log("Result is:", result);
