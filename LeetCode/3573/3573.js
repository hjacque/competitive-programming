/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    const cache = Array.from({length: prices.length}, () => Array.from({length: 3}, () => Array.from({length: k + 1}).fill(-Infinity)));

    function dp(idx, state, k) {
        if (idx === prices.length) {
            if (state !== 0) {
                return -Infinity; // invalid on going short entry profits
            }
            return 0;
        }
        if (cache[idx][state][k] !== -Infinity) {
            return cache[idx][state][k];
        }
        if (state === 0) {
            if (k > 0) { // can long or short
                cache[idx][state][k] = Math.max(
                    dp(idx + 1, 1, k - 1) - prices[idx], // buy long
                    dp(idx + 1, 2, k - 1) + prices[idx], // buy short
                    dp(idx + 1, 0, k) // skip
                );
            } else {
                cache[idx][state][k] = dp(idx + 1, 0, k);
            }
        } else if (state === 1) {
            cache[idx][state][k] = Math.max(
                dp(idx + 1, 1, k), // stay long
                dp(idx + 1, 0, k) + prices[idx] // sell long
            );
        } else if (state === 2) {
            cache[idx][state][k] = Math.max(
                dp(idx + 1, 2, k), // stay short
                dp(idx + 1, 0, k) - prices[idx] // sell short
            );
        }
        return cache[idx][state][k];
    }

    return dp(0, 0, k);
};