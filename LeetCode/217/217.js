/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        if (set.size !== i + 1){
            return true;
        }
    }
    return false;
};
