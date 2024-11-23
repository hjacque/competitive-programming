/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            map.set(i, 1);
        }
    }
    let u = 0;
    for (const [key, value] of map) {
        nums.splice(key-u, 1);
        u++;
    }
    return nums.length;
};
