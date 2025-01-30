/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let u = i + 1; u < nums.length; u++) {
            if (nums[u] !== nums[i]) {
                for (let o = u + 1; o < nums.length; o++) {
                    if (nums[o] !== nums[i] && nums[o] !== nums[u]) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};
