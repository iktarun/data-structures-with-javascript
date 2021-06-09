/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // code here
  let finalStr = "";
  let index = 0;
  let counter = 0;
  let j;
  let i = 0;
  while (i < chars.length) {
    counter = 0;
    j = i;
    if (chars[i] === chars[i + 1]) {
      while (j < chars.length && chars[j] === chars[j + 1]) {
        counter++;
        j++;
      }
      counter++;
    }
    // finalStr += str[i] + counter;

    chars[index++] = chars[i];
    if (counter > 0) {
      chars[index++] = counter + "";
    }

    i = j + 1;
  }

  chars.length = index;
  return chars;
};

let res = compress(["a", "a", "b", "b", "c", "c", "c"]);
console.log(res);
