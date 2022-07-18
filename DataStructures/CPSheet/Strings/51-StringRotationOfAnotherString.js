function areRotations(str1, str2) {
  let partition = 1;
  let part1 = "";
  let part2 = "";
  for (let partition = 1; partition < str1.length; partition++) {
    part1 = str1.slice(0, partition);
    part2 = str1.slice(partition);
    if (part2 + part1 === str2) {
      return true;
    }
  }
  return false;
}

let str1 = "ABACD";
let str2 = "CDABA";

console.log(areRotations(str1, str2));
