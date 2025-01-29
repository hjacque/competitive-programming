/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    for (let i = (low%2 !== 0 ? low : low + 1); i <= (high%2 !== 0 ? high : high - 1); i += 2) {
        count++;
    }

    return count;
};
