/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let res = 0;
    const elements = new Set();

    for (let i = 0, j = 0; j < s.length; j++) {
        if (!elements.has(s[j])) {
            elements.add(s[j]);
            if (j - i + 1 === 3) {
                res++;
                elements.delete(s[i]);
                i++;
            }
        } else {
            while (s[i] !== s[j]) {
                elements.delete(s[i]);
                i++;
            }
            i++;
        }
    }

    return res;
};
