/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function(responses) {
    const map = new Map();
    for (const res of responses) {
        const tmp = new Set();
        for (const r of res) {
            if (!tmp.has(r)) {
                tmp.add(r);
                map.set(r, (map.get(r) || 0) + 1);
            }
        }
    }
    const max = Math.max(...map.values());
    return [...map.entries()].filter(e => e[1] === max).sort((a, b) => a[0].localeCompare(b[0]))[0][0];
};
