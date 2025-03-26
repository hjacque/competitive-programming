const map = new Map();
map.set(1, 0);
const power = (x) => {
    if (map.has(x)) {
        return map.get(x);
    }
    map.set(x, 1 + (x % 2 === 0 ? power(x / 2) : power(x * 3 + 1)));
    return map.get(x);
}
/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const arr = [];
    for (let i = lo; i <= hi; i++) {
        arr.push(i);
    }
    return arr.sort((a, b) => {
        if (power(a) === power(b)) {
            return a - b; 
        }
        return power(a) - power(b);
    })[k - 1];
};
