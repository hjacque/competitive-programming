/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const res = [];
    const arr = potions.map((potion) => Math.ceil(success/potion)).sort((a, b) => a - b);

    for (const spell of spells) {
        let count = 0, low = 0, high = arr.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high)/ 2);
            if (arr[mid] <= spell) {
                low = mid + 1;
                count = low;
            } else {
                high = mid - 1;
            }
        }
        res.push(count);
    }
    return res;
};
