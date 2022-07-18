/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 91) {
      newStr.concat(String.fromCharCode(s[i].charCodeAt(0) + 32));
    } else {
      newStr.concat(s[i]);
    }

    console.log(newStr);
  }
  return newStr;
};

console.log(toLowerCase("Hello"));
