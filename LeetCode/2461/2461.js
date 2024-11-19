/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const n = nums.length;
    const elements = new Set();
    let currentSum = 0;
    let maxSum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        if (!elements.has(nums[end])) {
            currentSum += nums[end];
            elements.add(nums[end]);

            if (end - start + 1 === k) {
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= nums[start];
                elements.delete(nums[start]);
                start++;
            }
        } else {
            while (nums[start] !== nums[end]) {
                currentSum -= nums[start];
                elements.delete(nums[start]);
                start++;
            }
            start++;
        }
    }

    return maxSum;
};
