/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const cache = Array.from({ length: prices.length }, () => Array.from({ length: 2 }, () => new Array(3).fill(-1)));
  
    function dp(idx, isHolding, k) {
        if (idx === prices.length || k === 0) {
            return 0;
        }
        if (cache[idx][isHolding][k] !== -1) {
            return cache[idx][isHolding][k];
        }
        if (!isHolding) {
            cache[idx][isHolding][k] = Math.max(
                dp(idx + 1, 1, k) - prices[idx],
                dp(idx + 1, 0, k)
            );
        } else {
            cache[idx][isHolding][k] = Math.max(
                dp(idx + 1, 1, k),
                dp(idx + 1, 0, k - 1) + prices[idx]
            );
        }
        return cache[idx][isHolding][k];
    };

    return dp(0, 0, 2);
};