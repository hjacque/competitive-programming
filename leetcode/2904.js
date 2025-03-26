/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let beautifulCounter = 0;
    let res = "";
    let window = new Map();
    for (let left = 0, right = 0; right < s.length; right++) {
        if (s[right] === "1") {
            beautifulCounter++;
        }
        window.set(right, s[right]);
        while (beautifulCounter === k) {
            if (!res.length || right - left + 1 < res.length || (right - left + 1 === res.length && parseInt([...window.values()].join(""), 2) < parseInt(res, 2))) {
                res = [...window.values()].join("");
            }
            if (s[left] === "1") {
                beautifulCounter--;
            }
            window.delete(left);
            left++;
        }
    }
    return res;
};
