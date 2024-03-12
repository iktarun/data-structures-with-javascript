// Javascript program for the above approach

let CHAR = 256;

// This function returns true if
// str1 and str2 are ismorphic
function isoMorphic(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  // Length of both strings must be
  // same for one to one
  // correspondence
  if (n != m) return false;

  // For counting the previous appearances
  // of character in both the strings
  let countChars1 = new Array(CHAR);
  countChars1.fill(0);
  let countChars2 = new Array(CHAR);
  countChars2.fill(0);

  // Process all characters one by one
  for (let i = 0; i < n; i++) {
    countChars1[str1[i].charCodeAt()]++;
    countChars2[str2[i].charCodeAt()]++;

    // For string to be isomorphic the
    // previous counts of appearances of
    // current character in both string
    // must be same if it is not same we
    // return false.
    if (
      countChars1[str1[i].charCodeAt()] != countChars2[str2[i].charCodeAt()]
    ) {
      return false;
    }
  }
  return true;
}

console.log(isoMorphic("aab", "xxy") ? 1 + "\n" : 0 + "\n");
console.log(isoMorphic("aab", "xyz") ? 1 : 0);
