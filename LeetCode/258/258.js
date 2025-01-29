/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = num.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return num;
};
