/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for (const sentence of sentences) {
        const count = sentence.split(" ").length;
        max = Math.max(max, count);
    }
    return max;
};
