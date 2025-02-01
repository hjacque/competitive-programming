/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    const target = nums.length / 3;
    const res = [];
    for (const [key, value] of map.entries()) {
        if (value > target) {
            res.push(key);
        }
    }
    return res;
};
