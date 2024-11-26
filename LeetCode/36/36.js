/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    const rowMap = new Map();
    const colMap = new Map();
    const squareMap = new Map();

    for (let i = 0; i < 9; i++) {
        for (let u = 0; u < 9; u++) {
            const curr = board[i][u];
            if (curr === ".") {
                continue;
            }
            if (rowMap.has(i) && rowMap.get(i).includes(curr)) {
                return false;
            } else {
                rowMap.set(i, [...(rowMap.get(i) || []), curr]);
            }
            if (colMap.has(u) && colMap.get(u).includes(curr)) {
                return false;
            } else {
                colMap.set(u, [...(colMap.get(u) || []), curr]);
            }
            let squareId;
            if (i < 3 && u < 3) {
                squareId = 0;
            } else if (i < 6 && u < 3) {
                squareId = 1;
            } else if (i < 9 && u < 3) {
                squareId = 2;
            } else if (i < 3 && u < 6) {
                squareId = 3;
            } else if (i < 6 && u < 6) {
                squareId = 4;
            } else if (i < 9 && u < 6) {
                squareId = 5;
            } else if (i < 3 && u < 9) {
                squareId = 6;
            } else if (i < 6 && u < 9) {
                squareId = 7;
            } else {
                squareId = 8;
            }
            if (squareMap.has(squareId) && squareMap.get(squareId).includes(curr)) {
                return false;
            } else {
                squareMap.set(squareId, [...(squareMap.get(squareId) || []), curr]);
            }
        }
    }

    return true;
};
