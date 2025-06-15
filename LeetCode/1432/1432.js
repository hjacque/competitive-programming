/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const digits = num.toString();

    let maxNum = digits;
    for (const digit of maxNum) {
        if (digit !== "9") {
            maxNum = maxNum.split(digit).join("9");
            break;
        }
    }

    let minNum = digits;
    for (let i = 0; i < minNum.length; i++) {
        const digit = minNum[i];
        if (i === 0) {
            if (digit !== "1") {
                minNum = minNum.split(digit).join("1");
                break;
            }
        } else {
            if (digit !== minNum[0] && digit !== "0") {
                minNum = minNum.split(digit).join("0");
                break;
            }   
        }
    }

    return parseInt(maxNum) - parseInt(minNum);
};