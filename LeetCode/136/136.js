/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.delete(num);
        }
    }

    return [...map.keys()][0];
};
