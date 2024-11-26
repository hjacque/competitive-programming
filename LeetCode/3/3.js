/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const set = new Set();

    for (let i = 0, j = 0; j < s.length; j++) {
        while (set.has(s[j])) {
            set.delete(s[i]);
            i++;
        }
        set.add(s[j]);
        maxLength = Math.max(maxLength, set.size);
    }

    return maxLength;
};
