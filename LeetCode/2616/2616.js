/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    function isValid(mid) {
        let pairs = 0;
        for (let i = 0; i < nums.length - 1;) {
            if (nums[i+1] - nums[i] <= mid) {
                pairs++;
                i += 2;
            } else {
                i++;
            }
            if (pairs === p) {
                return true;
            }
        }

        return false
    }

    nums = nums.sort((a, b) => a - b);

    let lo = 0, hi = nums[nums.length - 1] - nums[0];
    let res = 0;
    while (lo <= hi) {
        const mid = Math.floor(((lo/2) + (hi/2)));

        if (isValid(mid)) {
            res = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return res;
};