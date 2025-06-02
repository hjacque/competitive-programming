/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const res = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        const pos = [...startPos];
        for (let u = i; u < s.length; u++) {
            switch (s[u]) {
                case "R":
                    pos[1] += 1;
                    break;
                case "L":
                    pos[1] -= 1;
                    break;
                case "U":
                    pos[0] -= 1;
                    break;
                case "D":
                    pos[0] += 1;
                    break;
            }
            if (!(pos[0] >= 0 && pos[0] < n && pos[1] >= 0 && pos[1] < n)) {
                break;
            }
            res[i]++;
        }
    }
    return res;
};
