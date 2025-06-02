/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let res = "";
    for (const char of order) {
        if (map.has(char)) {
            res += char.repeat(map.get(char));
            map.delete(char);
        }
    }
    for (const [char, count] of map.entries()) {
        res += char.repeat(count);
    }
    return res;
};
