function longestSubstrDitinctChars(s) {
  //code here
  let leftHash = {};
  let rightHash = {};

  let i = 0;
  let j = s.length - 1;
  let minIndex = 0;
  let maxIndex = 0;

  while (i < j) {
    if (!leftHash[s[i]]) {
      leftHash[s[i]] = s[i];
    } else {
      leftHash = {};
      leftHash[s[i]] = s[i];
      minIndex = i;
    }

    if (!rightHash[s[j]]) {
      rightHash[s[j]] = s[j];
    } else {
      rightHash = {};
      rightHash[s[j]] = s[j];
      maxIndex = j;
    }

    i++;
    j--;
  }

  return maxIndex - minIndex;
}

console.log(
  longestSubstrDitinctChars("aldshflasghdfasgfkhgasdfasdgvfyweofyewyrtyefgv")
);
