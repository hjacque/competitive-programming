/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let curr = 10;
    let turn = 0;
    while (true) {
        if (curr > n) {
            return turn === 1;
        }
        n -=curr;
        turn = 1 - turn;
        curr--;
    }
};
