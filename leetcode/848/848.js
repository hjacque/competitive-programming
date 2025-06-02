/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const arr = s.split("");
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += shifts[i];
        let code = arr[i].charCodeAt(0) + sum;
        if (code > 122) {
            code = ((code - 97) % 26) + 97;
        }
        arr[i] = code;
    }
    return String.fromCharCode(...arr);
};
