function GCDofTwoNumbers(a, b, c) {
  let res = -1;
  //Giving wrong result for 6, 12
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      res = i;
    }
  }
  return res;
}

function GCDofTwoNumbersMethod2(a, b) {
  if (b === 0) {
    return a;
  }
  //iff a > b
  return GCDofTwoNumbersMethod2(b, a % b);
}

let a1 = 6;
let b1 = 12;
const res = GCDofTwoNumbers(a1, b1);
console.log("LCM of ", a1, b1, "is=", res);
/*************************************** 
            // LCM program
*********************************/

function LCMofTwoNumbers(a, b) {
  let LCM = -1;

  let high = a > b ? a : b;

  while (true) {
    if (high % a === 0 && high % b === 0) {
      LCM = high;
      break;
    }
    high++;
  }

  return LCM;
}

let a = 15;
let b = 20;
const res1 = LCMofTwoNumbers(a, b);
console.log("LCM of ", a, b, "is=", res1);
