/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    for (let i = 0, j = 0; j < prices.length; j++) {
        if (prices[i] > prices[j]) {
            i = j;
        } else {
            const profit = prices[j] - prices[i];
            max = Math.max(max, profit);
        }
    }
    return max;
};
