/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let res = 2;
    for (let i = 0; i < s.length; i++) {
        const map = new Map();
        let count = 0;
        for (let u = i; u < s.length; u++) {
            if (!map.has(s[u])) {
                map.set(s[u], 1);
                count++;
            } else {
                if (map.get(s[u]) > 1) {
                    res = Math.max(res, count);
                    break;
                } else {
                    map.set(s[u], 2);
                    count++;
                }
            }
            if (u === s.length - 1) {
                res = Math.max(res, count);
            }
        }
    }
    return res;
};
