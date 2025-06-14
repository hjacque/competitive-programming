/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const res = new Array(n).fill(0);
    
    let curr = 1;
    for (let i = 0; i < n; i++) {
        res[i] = curr;
        if (curr * 10 <= n) {
            curr *= 10;
        } else {
            if (curr + 1 > n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
            while (curr % 10 === 0) {
                curr /= 10;
            }
        }
    }

    return res;
};