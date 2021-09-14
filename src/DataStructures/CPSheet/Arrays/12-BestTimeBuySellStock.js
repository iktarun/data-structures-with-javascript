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
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
