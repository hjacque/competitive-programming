/**
 * @param {string} word
 * @return {number}
 */
var maxSubstrings = function(word) {
    let map = new Map();
    let res = 0;
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            if (i - map.get(word[i]) > 2) {
                res++;
                map = new Map();
            }
        } else {
            map.set(word[i], i);
        }
    }
    return res;
};