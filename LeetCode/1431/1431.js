/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    const max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        res.push(max <= candies[i] + extraCandies);
    }
    return res;
};
