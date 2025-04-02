/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function(s, t, k) {
    const n = s.length / k;
    const map = new Map();
    for (let i = 0; i < s.length; i += n) {
        const slice = s.slice(i, i + n);
        map.set(slice, (map.get(slice) || 0) + 1);
    }
    for (let i = 0; i < t.length; i += n) {
        const slice = t.slice(i, i + n);
        if (!map.has(slice)) return false;
        const mapVal = map.get(slice);
        mapVal > 1 ? map.set(slice, mapVal - 1) : map.delete(slice);
    }
    return true;
};
