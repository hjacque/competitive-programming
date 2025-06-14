/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let maxOdd = -Infinity;
    let minEven = Infinity;
    for (const charCount of map.values()) {
        if (charCount % 2 !== 0) {
            maxOdd = Math.max(charCount, maxOdd);
        } else {
            minEven = Math.min(charCount, minEven);
        }
    }

    return maxOdd - minEven;
};