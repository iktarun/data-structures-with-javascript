/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0;
  }

  let s = "";
  let index = -1;
  let i = 0,
    j = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (s.length === 0) {
        index = i;
      }
      j++;
      s += haystack[i];
    } else {
      if (haystack[i] === needle[0]) {
        if (s.length === 0) {
          index = i;
        }
        s = haystack[i];
        j++;
      } else {
        s = "";
        index = -1;
        j = 0;
      }
    }

    if (s === needle) {
      return index;
    }
    i++;
  }

  if (s !== needle) {
    return -1;
  }
  return index;
};

console.log(strStr("aaa", "aaaa"));
