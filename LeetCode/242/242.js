/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    for (let u = 0; u < t.length; u++) {
        if (!map.has(t[u])) {
            return false;
        }
        if (map.has(t[u])) {
            map.set(t[u], map.get(t[u]) - 1);
        }
        if (map.get(t[u]) === 0) {
            map.delete(t[u]);
        }
    }
    return true;
};
