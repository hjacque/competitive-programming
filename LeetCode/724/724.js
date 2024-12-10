/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = [0];
    let right = [0];

    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i < nums.length; i++) {
        leftSum += nums[i-1];
        left.push(leftSum);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum += nums[i+1];
        right.push(rightSum);
    }

    for (let i = 0; i < nums.length; i++) {
        if (left[i] === right[nums.length- 1 -i]) {
            return i;
        }
    }

    return -1;
};
