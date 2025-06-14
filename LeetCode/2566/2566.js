/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const digits = num.toString().split("");
    
    const r1 = digits.find((e) => e !== "9");
    const max = r1 ? parseInt(digits.map((e) => e === r1 ? "9" : e).join("")) : num;
    
    const r2 = digits.find((e) => e !== "0");
    const min = r2 ? parseInt(digits.map((e) => e === r2 ? "0" : e).join("")) : num;
    
    return max - min;
};