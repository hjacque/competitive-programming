/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const lowerCaseStr = s.toLowerCase();
    const voyelsArr = [];
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(lowerCaseStr[i])) {
            voyelsArr.push(s[i]);
        }
    }
    return s.split("").map((e, i) => {
        if (["a", "e", "i", "o", "u"].includes(lowerCaseStr[i])) {
            return voyelsArr.pop();
        } else {
            return e;
        }
    }).join("");

    return s;
};
