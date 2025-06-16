/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = nums[0];
    let res = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            res = Math.max(nums[i] - min, res);
        }
        min = Math.min(nums[i], min);
    }
    return res;
};