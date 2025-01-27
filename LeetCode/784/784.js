/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (!res.length) {
            res.push("");
        }
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s[i])) {
            res = res.map((e) => e + s[i]);
        } else {
            res = [...res.map((e) => e + s[i].toLowerCase()), ...res.map((e) => e + s[i].toUpperCase())];

        }
    }
    return res;
};
