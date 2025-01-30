/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroId = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroId.push(i);
        } else if (nums[i] !== 0 && zeroId.length) {
            nums[zeroId[0]] = nums[i];
            zeroId.shift();
            nums[i] = 0;
            zeroId.push(i);
        }
    }
};
