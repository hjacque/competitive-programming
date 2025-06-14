/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const cache = Array.from({length: prices.length }, () => Array.from({length: 2}, () => Array.from({length: k}).fill(-1)));

    function dp(idx, isHolding, k) {
        if (idx === prices.length || k === 0) {
            return 0;
        }
        if (cache[idx][isHolding][k - 1] !== -1) {
            return cache[idx][isHolding][k - 1];
        }
        cache[idx][isHolding][k - 1] = !isHolding ? 
            Math.max(
                dp(idx + 1, 1, k) - prices[idx],
                dp(idx + 1, 0, k)
            ) :
            Math.max(
                dp(idx + 1, 0, k - 1) + prices[idx],
                dp(idx + 1, 1, k)
            );
        return cache[idx][isHolding][k - 1];
    }

    return dp(0, 0, k);
};