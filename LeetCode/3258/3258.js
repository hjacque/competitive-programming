/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let res = 0;
    let zeroCounter = 0, oneCounter = 0;
    for (let left = 0, right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            zeroCounter++;
        } else {
            oneCounter++;
        }

        while (zeroCounter > k && oneCounter > k) {
            if (s[left] === "0") {
                zeroCounter--;
            } else {
                oneCounter--;
            }
            left++;
        }

        res += right - left + 1;
    }
    return res;
};
