/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    for (let right = 0; right < t.length; right++) {
        if (t[right] === s[left]) {
            left++;
            if (left === s.length) {
                break;
            }
        }
    }

    return left === s.length;
};
