// https://www.geeksforgeeks.org/the-celebrity-problem/

class Solution {
  //Function to find if there is a celebrity in the party or not.
  celebrity(M, n) {
    // code here
    let stack = [];
    let noOneKnowsEachOther = true;

    for (let i = 0; i < n; i++) {
      stack.push(i);
    }

    for (let i = 0; i < n - 1; i++) {
      let celebrity1 = stack.pop();
      let celebrity2 = stack.pop();
      console.log(
        "Comparsion of celebrity1:",
        celebrity1,
        "celebrity2:",
        celebrity2
      );
      if (M[celebrity1][celebrity2]) {
        noOneKnowsEachOther = false;
        stack.push(celebrity2);
      } else {
        stack.push(celebrity1);
        if (M[celebrity2][celebrity1]) {
          noOneKnowsEachOther = false;
        }
      }
    }

    if (noOneKnowsEachOther === true) {
      return -1;
    }

    // // Step 5 : Check if the last
    // person is celebrity or not
    let topElement = stack[0];
    // console.log("topElement:", topElement)
    for (let i = 0; i < n; i++) {
      // console.log("i",i);
      if (topElement === i) {
        continue;
      } else {
        if (M[topElement][i]) {
          // console.log(topElement, i, M[topElement][i])
          return -1;
        }
      }
    }
    console.log("Our celebrity is :", topElement);
    return topElement;
  }
}

let obj = new Solution();

let arr = [
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
];

obj.celebrity(arr, arr.length);
