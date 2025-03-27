/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let arr = s.split("");
    let i = 0;
    while (i < arr.length) {
        if (parseInt(arr.join(""), 2) <= k) {
            return arr.length;
        }
        if (arr[i] === "1") {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return 0;
};
