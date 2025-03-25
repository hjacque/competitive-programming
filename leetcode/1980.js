/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const set = new Set();
    for (const num of nums) {
        set.add(parseInt(num, 2));
    }
    for (let i = 0; i < Infinity; i++) {
        if (!set.has(i)) {
            return i.toString(2).padStart(nums[0].length, "0");
        }
    }
};
