function GCDofTwoNumbers(a, b, c) {
  let res = -1;
  for (let i = 1; i < a && i < b && i < c; i++) {
    if (a % i === 0 && b % i === 0 && c % i === 0) {
      res = i;
    }
  }
  return res;
}

// const res = GCDofTwoNumbers(12, 24, 48);
// console.log("res:", res);
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

const res = LCMofTwoNumbers(12, 7);
console.log("res:", res);
