/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  let char1 = "";
  let char2 = "";
  let comparsionHappened = false;
  console.log(s.length);
  if (s.length == 1) {
    return true;
  }
  while (i < j) {
    char1 = s[i].toLowerCase().charCodeAt(0);
    char2 = s[j].toLowerCase().charCodeAt(0);
    console.log(
      "Before",
      i,
      j,
      char1,
      char2,
      String.fromCharCode(char1),
      String.fromCharCode(char2)
    );
    if (!(char1 >= 97 && char1 <= 122)) {
      i++;
      continue;
    }
    if (!(char2 >= 97 && char2 <= 122)) {
      j--;
      continue;
    }
    console.log("After", i, j);
    comparsionHappened = true;

    if (char1 !== char2) {
      return false;
    }
    i++;
    j--;
  }

  console.log(comparsionHappened, i, j);
  if ((!comparsionHappened && i !== j) || i < j) {
    return false;
  }
  return true;
};

console.log(isPalindrome("P0"));
