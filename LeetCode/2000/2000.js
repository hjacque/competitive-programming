/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            return word.split("").splice(0, i + 1).reverse().join("") + word.slice(i + 1);
        }
    }
    return word;
};
