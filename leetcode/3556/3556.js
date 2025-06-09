function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false
    }
    for(let i = 3, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {string} s
 * @return {number}
 */
var sumOfLargestPrimes = function(s) {
    let p1 = 0, p2 = 0, p3 = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const num = parseInt(s.slice(i, j + 1));
            if (num !== p1 && num !== p2 && num !== p3 && num > p3 && isPrime(num)) {
                if (num > p1) {
                    [p1, p2, p3] = [num, p1, p2];
                } else if (num > p2) {
                    [p2, p3] = [num, p2];
                } else {
                    p3 = num
                }
            }
        }
    }
    return p1 + p2 + p3;
};