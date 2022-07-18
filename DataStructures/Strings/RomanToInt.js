/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = hash[s.slice(-1)];

  let i = s.length - 2;

  while (i >= 0) {
    if (hash[s[i]] < hash[s[i + 1]]) {
      res -= hash[s[i--]];
    } else {
      res += hash[s[i--]];
    }
  }
  return res;
};

let roman = "LVIII";
console.log(roman, "Roman string to integer is:", romanToInt(roman));
// JavaScript Program to convert decimal number to
// roman numerals

// Function to convert decimal to Roman Numerals
function printRoman(number) {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let sym = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let i = 12;
  let res = "";
  while (number > 0) {
    let div = Math.floor(number / num[i]);
    number = number % num[i];
    while (div--) {
      res += sym[i];
    }
    i--;
  }

  console.log(res);
}

//Driver program

let number = 58;

printRoman(number);

// Methods2 integer to roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

  let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

  let thousands = ["", "M", "MM", "MMM"];
  //   console.log(Math.floor(num / 1000));
  return (
    thousands[parseInt(num / 1000)] +
    hundreds[parseInt((num % 1000) / 100)] +
    tens[parseInt(Math.floor(num % 100) / 10)] +
    units[parseInt(Math.floor(num % 10))]
  );
};

console.log(intToRoman(200));
