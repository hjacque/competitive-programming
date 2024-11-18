/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) {
        return new Array(code.length).fill(0);
    } else if (k > 0) {
        return code.map((e, i) => {
            let acc = 0;
            for (let o = 1; o <= k; o++) {
                acc += code[i+o >= code.length ? i + o - code.length : i+o]
            }
            return acc;
        })
    } else {
        return code.map((e, i) => {
            let acc = 0;
            for (let o = -1; o >= k; o--) {
                acc += code[i+o < 0 ? i + o + code.length : i+o]
            }
            return acc;
        })
    }
};
