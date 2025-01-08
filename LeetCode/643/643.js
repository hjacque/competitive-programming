/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;

    let sum = 0;
    let left = 0, right = 0;
    while (right < nums.length) {
        while (right - left < k) {
            sum += nums[right];
            right++;
        }
        max = Math.max(sum / k, max);
        sum -= nums[left];
        left++;
    }

    return max;
};
