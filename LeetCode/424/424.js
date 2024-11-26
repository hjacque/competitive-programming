/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = 1;
    const map = new Map();

    for (let i = 0, j = 0; j < s.length; j++) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);

        let max = 0;
        for (let [key, val] of map) {
            max = Math.max(max, val);
        }
        if (j - i + 1 - max > k) {
            map.set(s[i], map.get(s[i]) - 1)
            i++;
        } else {
            res = Math.max(res, j - i + 1);
        }
    }

    return res;
};
