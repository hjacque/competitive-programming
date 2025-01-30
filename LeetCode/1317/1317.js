/**
 * @param {number} n
 * @return {number[]}
 */
const hasZero = (n) => {
    return n.toString().includes('0');
}

var getNoZeroIntegers = function(n) {
    for (let i = n -1; i > 0; i--) {
        if (!hasZero(i)) {
            for (let u = i; u > 0; u--) {
                if (!hasZero(u) && i + u === n) {
                    return [i, u];
                }
            }
        }
    }
};
