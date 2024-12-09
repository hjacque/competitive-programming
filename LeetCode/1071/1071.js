/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const l1 = str1.length;
    const l2 = str2.length;

    const l = Math.min(l1, l2);
    const minS = l === str1.length ? str1 : str2;

    for (let i = l; i > 0; i--) {
        if (!(l1 % i) && !(l2 % i)) {
            const l1M = l1 / i;
            const l2M = l2 / i;

            const pattern = minS.split("").slice(0, i);
            const s1 = [];
            for (let u = l1M; u > 0; u--) {
                s1.push(...pattern);
            }
            if (s1.join("") !== str1) {
                continue;
            }
            let s2 = [];
            for (let u = l2M; u > 0; u--) {
                s2 = [...s2, ...pattern];
            }
            if (s2.join("") !== str2) {
                continue;
            }
            return pattern.join("");
        }
    }

    return "";
};
