/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Method1
  //   s = s.trim("");
  //   let i = s.length - 1;

  //   while (i >= 0 && s[i].charCodeAt() !== 32) {
  //     i--;
  //   }

  //   return s.length - 1 - i;

  // Method2
  const words = s.trim().split(" ");
  return words[words.length - 1]?.length || 0;
};

console.log(lengthOfLastWord("a "));
