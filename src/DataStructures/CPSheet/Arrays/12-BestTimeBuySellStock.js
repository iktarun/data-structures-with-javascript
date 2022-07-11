/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0];
  var max = 0;
  for (var i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;

  /* Solution O(n*n)
    let max_profit = 0;
    for(let i=0; i< prices.length; i++){
         for(let j=i+1; j< prices.length; j++){
            if(prices[j] - prices[i] > max_profit){
                max_profit = prices[j] - prices[i]
            }
        }
    }
    return max_profit;
    */

  /**
     * You don't actually need to calculate minimum if you start iteration from the end.
    Just keep track of the maximum number of the right sub array at the point of iteration

    var maxProfit = function(prices) {
        let max = 0;
        let ans = 0;
        for(let i=prices.length - 1; i>=0; i--) {

            ans = Math.max(ans,  max - prices[i]);
            if(prices[i] > max) {
                max = prices[i]
            }
        }
        return ans;
    };
     */
};

console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]));
