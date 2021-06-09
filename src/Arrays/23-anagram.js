/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //     Approach 1
  //     if(s.length !== t.length){
  //         return false;
  //     }

  //     s = s.split('').sort().join('');
  //     t = t.split('').sort().join('');

  //     for(let i=0; i< s.length; i++){
  //         if(s[i] !== t[i]){
  //             return false
  //         }
  //     }

  //     return true;

  //     Approach 2

  if (s.length !== t.length) {
    return false;
  }

  // Create a count array and initialize all values as 0
  let count = {};
  let i;
  for (i = 0; i < s.length; i++) {
    count[s[i]] = 0;
    count[t[i]] = 0;
  }
  // For each character in input strings, increment count
  // in the corresponding count array
  for (i = 0; i < s.length; i++) {
    count[s[i]]++;
    count[t[i]]--;
  }

  // See if there is any non-zero value in count array
  for (i = 0; i < s.length; i++) {
    if (count[s[i]] != 0) {
      return false;
    }
  }

  return true;
};

var isAnagramMethod2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  /* Method 1 */
  let res = s.charCodeAt(0) ^ t.charCodeAt(0);

  for (let i = 1; i < s.length; i++) {
    res = res ^ s.charCodeAt(i) ^ t.charCodeAt(i);
  }

  if (res === 0) {
    console.log("String are anagram");
  } else {
    console.log("Not an anagram");
  }

  /*Method2
  let res = new Array(26).fill(0);
  for (let i = 0; i < 26; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode) {
      res[charCode - 97]++;
    }

    let charCodeTarget = t.charCodeAt(i);
    if (charCodeTarget) {
      res[charCodeTarget - 97]--;
    }
    if(res[charCodeTarget - 97] < 0){
      break;
    }
  }
  */
  console.log(res);
};

console.log(isAnagramMethod2("abba", "abba"));
