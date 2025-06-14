/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
    const set = new Set();
    for (const n of nums) {
        if (!(n & (n - 1))) {
            set.add(n);
        }
    }
    let i = 0;
    while (set.has(2 ** i)) {
        i++;
    }
    return 2 ** i;
};