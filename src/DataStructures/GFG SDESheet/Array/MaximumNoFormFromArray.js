/**
 * @param {Number[]} arr
 * @returns {String}
 */

class Solution {
  printLargest(arr) {
    //code here
    // arr.sort()
    function myCompare(a, b) {
      let ab = a + b;
      let ba = b + a;
      //becuase we need this in descending order
      return ba - ab;
    }

    let arrMap = arr.map((item) => item.toString());
    arrMap.sort(myCompare);
    return arrMap.join("");
  }
}

let arr = [3, 30, 34, 5, 9];

//9534330

let obj = new printLargest();
obj.printLargest(arr);
