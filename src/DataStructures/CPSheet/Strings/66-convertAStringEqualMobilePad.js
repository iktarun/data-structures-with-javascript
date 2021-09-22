// Driver Function
let str = [
  "2",
  "22",
  "222",
  "3",
  "33",
  "333",
  "4",
  "44",
  "444",
  "5",
  "55",
  "555",
  "6",
  "66",
  "666",
  "7",
  "77",
  "777",
  "7777",
  "8",
  "88",
  "888",
  "9",
  "99",
  "999",
  "9999",
];

function printMobileSequence(str, input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    //   Special case for space
    if (input[i] === " ") {
      output += " ";
    } else {
      let index = input[i].charCodeAt() - 65;
      output += str[index];
    }
  }
  return output;
}

let input = "GEEKS";
console.log(printMobileSequence(str, input));
