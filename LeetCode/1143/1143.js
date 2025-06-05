/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = Array.from(Array(text1.length + 1), () => new Array(text2.length + 1).fill(0));
    for (let y = text1.length - 1; y >= 0; y--) {
        for (let x = text2.length - 1; x >= 0; x--) {
            if (text2[x] === text1[y]) {
                dp[y][x] = 1 + dp[y + 1][x + 1];
            } else {
                dp[y][x] = Math.max(dp[y + 1][x], dp[y][x + 1]);
            }
        }
    }
    return dp[0][0];
};
