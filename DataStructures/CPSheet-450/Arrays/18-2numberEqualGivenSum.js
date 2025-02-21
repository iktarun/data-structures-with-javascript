/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
*/


   function  getPairsCount(arr,n,k){
    var m = new Map();
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (m.has(k - arr[i])) {
            count += m.get(k - arr[i]);
        }
        if (m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1);
        } else {
            m.set(arr[i], 1);
        }
    }
    return count;
    }

    let result = getPairsCount([1,5,5,5,5,7], 6, 10);
    console.log("result:", result)



